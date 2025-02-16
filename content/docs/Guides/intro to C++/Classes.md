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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZ7PCDR%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T021457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJIMEYCIQCWb9GLsA8EGYUYacMNgFoKdCHDdODP%2FT7ZkwDyrygYSAIhAKM%2ByX41d07gc1WUehNDIlCXAPEjalVwo8jdm9bXkHZaKv8DCFIQABoMNjM3NDIzMTgzODA1IgxL87eP%2FYM8lccPvzAq3APDxQB%2F0pt3eP4GpeUdl3v2P7ffpsDxezGxU3VXOMLn7JDQ8xIPZbXauuFDFzO1VFQkA2j4s0bxgWIBNAHzkR68t7ty39Ki0YcLU5%2Fh58Y4PIK4VBwRaK2Jlq113tcwbXcgyoaKIJYoZDw1pKN7fxM2K3jG605M8kULe0vl46DRqUbgyV3eI6JG55StNsStQVxT7p4haRM8mQ27yxYzD%2BWdRt7GgLRwOMIGkvXFqJ6dfm5VQpBby%2FKwzbjO4bkkn6TRlQxfbHiEgcz5q3hIsyzMARD2XLJcPuXs8oSAS4FiiocjOxrtmk8Odt4P%2FJ8NGgZ9S2yu6EH1KQgziEpq09BBD7tK87t4p3smhEn9dbpP5Y5tP650U%2BrRsrjZ7hYqWOXIbK5VEd09q4qHVDP9sh1bx7sBwTLbv%2FNxH%2FEBoVXlgG1r1ODtgYVdd2E8%2BTsqGd2XGhpzPKtfNk2ZJikQfMwh3VcOwIuZsS7qE%2BQQ5Nd6cGyCDufWXamCNuh0vd6UckgEo3OO1qfSpMn9S5R6ZIiLIrAxs52H3h7WqSbxKA%2BMr8aDZXspPi%2BKHSsCx4S2aJtHmixwLe2QkHwBBYtPa9Fn3Sr21dn64kv0I7Z9GZdDMEZyzdRl0lNlc0fdxjCq5sS9BjqkAaq7MWR%2FhYo7G8or349bZ5NGNI81Du3LdInLoicCEwyGkMt2SXiyOuWOlfB2zgVcfqt%2Bzbk1xe9TRglAsZVnTOLR38s19cIg3QGw58e8BP4PKAEIUvBiTQReLYwVTyZHqp4%2BklbvIa9F7AfMsFgVcFXI5Z%2BVZ0J7ECCz%2F%2FPgbb54S7StWsSRYOWaBdlEZPqmaE5RrGI9aiNnHgmaowfffJotMRey&X-Amz-Signature=89f1394b7ba32ec29d5998718b1b937cc5d13b321a0ed96bbc4b994a7eb8cf12&X-Amz-SignedHeaders=host&x-id=GetObject)

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
