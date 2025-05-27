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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665YSEWII5%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T050933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG58706htQb3BiFjVSB4WDJHupkb6hiph%2BUDEyRI9Iy2AiEAh94w1hjaEhY2QAHUCWSCblYW4cQ8c00HECsiv0hOVd0q%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDIMGce5xyUf6nmIv4yrcA9OKJeSuf%2B%2Fv%2B9hODKjJB9bUgddt3DptwAl7iEeUczeLzMj7GjX0muAEjIsxAs70rZ6b2%2FXYyhFCyktjAdotKBR8Ldrwzx7PSXQK8S4nHms3PnJvBPI8jU4O8OD4mkHhxfSU%2FfOpoqRznbOR5YW41GC8paid8ahD%2B3cnSqC9Ydje5Aqr90D4etcnISMhItrNyCIl%2F80GofSeAG8BpmUjK4LON249Wm%2FiZhVugFn2MHzw%2Fv9Nm9K2EVR3x%2BU9akfdTLKPabWHepn7t2BjpiIRyOzty3631rjrRXW4p2Ox4xcKGz3Vt8MKQipjIzQAboBMiTnnyEo5tT3n9BljoUW%2BsF83mIfMVBUw8QODuL%2FuF3Np%2BIcLPNczlnLFqGh0Ix9oCf8w9QsePvnh%2FjcXtbDbP0e8CY73oY2INmAHnIATc9BmM1%2Bcnm%2FKuK6a%2B1zOKb5WvrG6vRxYl5zvOiw6iyCmj%2BU3lUrT5AESTXYHUiLRfTCO53GHW1Pl5T9Xbfzmnp1Yf7MLIf9t3f%2BU5MDHTLkCCxDjCTTmEZv8BksmkIg0u%2BUoZJ%2BmAecLrU931ARiswQhNm%2FlAXh5%2BsPgsiNUaS4htllcyWoVfrxS7heIie3DQeJljb72WFZqd84kP2F7MKGQ1cEGOqUBIOnOKXKGWn8P%2BBo4gONKLoi1Pyl7redN4WWoI%2BhCbxdIm7rBkJ7gu1daYwPmP60f6AyspRYXMogEJevqWTvq9ppibYQNp3VDRr7SqbfPH3Pdo0mi1%2FXTO3wz666LJwivB2UBwaO9Usz8P9IoMJZsTMuqQDKj2rtqjUQvjDo77Z76DyWhfXRVCj4H%2FwkoTZdqUYZrYf7XIX5fpcQh%2Fw8A%2Fo1Zw5yI&X-Amz-Signature=c7854e289fe4cc1d06dcd09bba058dc99b0ee19fa9d178acbb27a7c994389782&X-Amz-SignedHeaders=host&x-id=GetObject)

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
