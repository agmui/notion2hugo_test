---
sys:
  pageId: "2329c1cd-96c8-4fd3-a4f3-9920d69d1c8a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-11-08T18:33:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Classes.md"
title: "Classes"
date: "2024-11-08T18:33:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 113
toc: false
icon: ""
---

## basic class template

```cpp
class Milk {
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {

    }
    ~Milk() {} // deconstructor
    void drink(int galOfPilk) {
        printf("drinking %dL of Milk\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};

int main(){
	Ilk i;
	i.drink(1);
	
	Ilk* i = new Milk();
	i->drink(1); // arrow syntax when i is a pointer
	i->~Milk();
}
```

<details>
      <summary>What is </summary>
       `~Milk()`is a [de-constructor](https://www.geeksforgeeks.org/destructors-c/#) (its basically like `free()` in c). Unlike Java or python, C++ is not garbage collected so when we make an object we have to also manually delete it. The computer does not magically make it go away when you are done with it.
  </details>

## [Inheritance](https://www.geeksforgeeks.org/inheritance-in-c/)

```cpp
class A{
	...
};

class B: public A{
	...
};
```

### Creating objects

```cpp
int main(){
	Person* p = new Person(1,2,3); // heap allocated
	Person p2(1,2,3);      // stack allocated
}
```

```cpp
class A{
public:
	A(){
		...
	}
};
int main(){
	A a; // Note: if your constructor does not take any arguments
}
```

> Note: you will learn what stack and heap are in CSSE132 but for now we generally use stack allocated in Robomasters

Why use stack over heap?:

This is what the `new` operator calls when ever it gets used.

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YUELYLB%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T110823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCAnc3VuIeFeyac9X43O50w%2FbuqYdZiFHUZTifiHcKgvQIgBj3GBErhbbHqqqG8%2Bj8t6Gp5WQvswTasLf4YPZc4NIkqiAQI6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlYnTSfsrQSoWxWxCrcA%2BqZWNT97fs%2BFwRRxORAqQp0xcV%2FXrG9fIXFouwRaC0l%2Bk8DIJmyBuol6MY2eN0%2Fzq5i5WMfSJrEGoFxtbm9CIngmzV1UxgaU8EoMZEFDXzyFnMS85KTtZgFjlcsa3aizjf3Yuke3td5qlOyAI6XR51pFqA6eFPqhPn21X3%2B3%2BXf3R%2FLya8NKM46rCAp%2FzJ4FGb7lpGzchLCnG1OtTQVIxyfg24NYq8%2Bfr7mRn48vEEULicsxEYi67bZ2td71C1nB1jpqpm4rRVo9Nfwsx2lrNaygptxfWsDjZN7bGZ0K5P3djmuiYCp%2F5cudH0OfO723D7E0KmQ5hhnyusJJhX11jVVi9tEbNZUOqCidlay8mTC08VJYt9gABoCeUphHXcVSV%2FwvMXe%2FgfXfY9ZKWvf8ufnUnmPPePpoWYz75M8DIzkPAZu%2F0t%2FZdNGLi27UQNWx36cwDwBEaAOPbVBFQQ8Cpf7sOpj6IsZ3rEHceHs%2BjibyzU8ShD%2BBEjOLKZiJwTmhl1SwSL366b7ZdcZp9lLPenpa85MSBeJQtXfD9uLs%2FG3FnWAbchBI4dNDFZZ%2B8Nvr0MHE6S02SUvwIKdWYS4OYb6QOftwswAbaKZOpIcfIz%2Ba22PH4QWNw02nXSWMIaUlMMGOqUBGfKwQe9zqFepRiIEM6d%2BPWB2gD1WM5s1jrTjwUaJ5R0Kw8lat4Fd5aoWiGrN8XsTCJ7D5THQ6PAvCZ%2BsWePS2cuJKYkYvtlxEt77PLzMY1RfZ1TBYFkr8NGtuzzET4VNx4EYvc64H%2F1IBAaJIXcpYe4F%2FtdRfMEi2Rqk882HZSE10zWalWlGfbRg9SBZHtYbDtqe7QfEXWKyEjQ0SruXQC1F6nIz&X-Amz-Signature=a85d382d1fc8e474c5757d4ee70bee76263792b3d2b965edfcdae1dc4593533e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

## Constructors

For constructors, there are 2 ways of doing it

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
		MyClass myClass;
	public:
		Person(int age, int height, int weight){
			this->age = age;
			this-> height = height;
			this->weight = weight;
			this->myClass(69);
		}
};
```

 _constructor initializer list:_

```cpp
class Person{
	private:
		int age;
		int height;
		int weight;
	public:
		Person(int age, int height, int weight):age(age),height(height),weight(weight), myClass(69)
		{
			...
		}
};
```

We generally use the second form because

## NOTE: YOU CANT CALL CONSTRUCTORS WHEN DECLARED!!!

All together

```cpp
#include <iostream>
#include <string>

using namespace std;

class Milk
{
private:
    int milk;
    int private_func() {
        return 69;
    }
public:
    Milk(int milk): milk(milk) {
    }
    ~Milk() {}
    void drink(int galOfPilk) {
        printf("drinking %dL of PILK\n", galOfPilk);
        printf("%d\n", this->private_func());
    }
    int getMilk() {
        return this->milk;
    }
};
class Pilk : public Milk // inheritance
{
private:
    string cola;
    int numDrinks;
public:
    Pilk(string cola, int numDrinks, int milk)
        : cola(cola),
          numDrinks(numDrinks),
          Ilk(milk)
    {
        printf("pilk\n");
    }
    string getCola() {
        return cola;
    }
};

int main()
{
    Ilk *i = new Ilk(420);
    i->getMilk();
    Pilk p("coco cola", 420, 2);
    p.drink(1337);
    i->~Ilk();
}

```

## TODO: explain → arrow syntax

# Exercise:

make 2 classes:

- Car
	- string name
	- getName()
- Vehicle
	- int id
	- void drive() // prints "vroom"
