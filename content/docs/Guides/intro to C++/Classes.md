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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTCSMUI6%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T150800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJGMEQCIHwV0TOkQLfKbynRMDLKSevbe42TxZFJXTeIHkU0zvd0AiA%2BqMb61gjhXkNo8tYRzHEc1vnQpK8BEf4Bl20qxPGkGiqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQtPmugrAIcR4mhJsKtwDgi0QzgDOvmYltaS7WFFDnlBZavnePYfNxXuwiXYRf7eJQLMyK79EyBsQd9hE26p1lKSIkrtHq2IaMyhQPczpMSrv39Q76oBqJjoGKhemYKk3Dk11JcABy5qb%2Fvk%2FJ46x%2FMQvHSKzJw3fk1oj6JyddFbQBKXSde76%2FgK4BToCszYYcGM%2Bv8tEpZyDeIGY0xmAmiiGKul6ZjmYgImuA7LAisHg0hS2mhUSkxDMvPcon9XQ%2B2Zq4Yu%2FUL09j%2FUULE%2F0vDtDIZVRy2J9SnjRx5S3A1%2BocmtHN6JcqRuuvT7ZyzU6GjKwTJ9iAiOuIMjwJjkVQ9B7GBsmoeFgqi%2FDBfGCvLfDsWS2s%2Bm9xU%2FIE70F08tM7r5NxB%2BpAiGz%2F%2FKXLhNlG1gSWx2mEAeVaRMupEoBhZoRRE1FYU%2Bwi2XZfk2SU8Wj0MYYqHKSvIuzONGGHXC%2FamWeLG7w2oCL6YBJ4KCvbUcHBrEtsvdU8Ug7IsLQ8O6BuKEd86eNFJjHjhi4rgb5Z%2FnFnGwzoHkU%2FgIxrzLHyEoJRbdVHDI%2F%2BMGZUz9uA6BlRvzehj9L8EDw8fheSNNGynorkIdMq8vy4UPhJIKRunBKio93nVv5q7AgSgkApfGaMkyz7ONalVCDhdsw6frWvQY6pgGNP4QsWJAxU9vHU37yq5J8EVOJo6iRHayx0WJoy%2FCjmraYi%2Bo93%2BeE4hN0iFJ0F7kNAMppnQgmdGAW4ZIUAaNhkit0CzJKQ3XLEqTv1IWoe9h9xcL%2FlBBzUM0cbQ8BCLs5eacBeCdYGKHwXiBoKOFjGAwYibCvIjfhEYxaCxFfokPZoYfFJ3aYHaSPx6jnfBaguFky7skwraWqSlkmvxkiwR9FRyKz&X-Amz-Signature=96d7ab5e5accc699f434a94acaf07aa022c1f9e24e51447481b3ff7ac793e914&X-Amz-SignedHeaders=host&x-id=GetObject)

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
