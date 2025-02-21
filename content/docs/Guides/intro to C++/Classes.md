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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6HKPDNY%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T210504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG%2FMa7NkSoTpAe9GRxTlCa8NEfdYB580nd%2BpwJlcGbc3AiBqUEaUU%2FtuOzZGi1q8jnpExAF1NZbdoCTbU5Peh97x6yqIBAjd%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIXxUmQo7MmSAarueKtwD3RmsGBRsOM5LeOfS2wqj17mRbHiitYDh%2BbL0n0FlywuhDHGr2XoUrC5TrE2ACqvgdJOh7HHYNSy4wsvBANP2aq6GrF4YaJNA62UGoUU7g0oNuyJlDF7u0VBP87TcW1%2ByADv0Ar%2Bf%2B2UrqNBGgDMeHwoTxr6%2BnpKUeWjHQZZDBl4eKGztoptpYB6zW8FBSXE%2BOEqUyxv0ePTF2Ty1IEjv4Z%2FuwGQ0oorXFkorX9I%2FxoZ75SIDNgsuWhy6SwXFzSbI4wWutAKKJxJZlg0jATa4KYvMpLf8XwUfBNp2517gDKhR9sEX%2BEW6zVOr9wpGf%2FoDmKyV0WlFzBUHCqqQOAq0rLPuJ918HNYjMyvOANcDqVDbpf2XsOdL60PICvKYqatAox15g4oIABhzJjU4kgFIw8mTOWGjsyA9T5sq6UcDyzjjUjmbFkczc4%2B6%2BQRR0V0FS5o2LJ7QJbp77Axi7Qq%2FjgZ7ThLKXdLOCOMmspmXHza%2FZLjO9uO8DmwPP4vGrORcfy8SR0SgXTvCm4XpcAk1LfIyFTgjvgyru0jfkVi45FHTJyMPK2bnK3c2ScmE%2BMmL8YyAOAqj7PW7knkwWlyyzwV6OnucgiPQTDXgO%2FSyKVRcvYc1NRyed2fhW5wwjLzjvQY6pgFq80kulsuFcjzuTCJPIGTBrwazoE3AbW2fVKxYml0UtZv%2BTHlvBUcB9BlTT09QC%2BDwS2iJXBCy4wyvy4nYhePniaye0sWysqkoQPa2dhh6nAUf%2Fhwjb%2F%2F7B1lx5pFnvnOZgaU7TqfiTeGe9c7AH3S1lqbaqtuDgYOw0ehzKzw917PuXgQO9ZG%2F771%2BAKYj8Pny%2BAt5cXRCvx0XhZY79%2Fqn6gxz0sLC&X-Amz-Signature=d9a489ecbfa92ccbb77d44dc7b96eacf4fe5e0b5002adc42793386e80b3f001d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
