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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664QW6V4CD%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCJcnEdsZjxuda0IkVgdGXJSIfD6uRQPZdDrgE6OyKbywIhAOtnjpdbUi4Tmi6jXScO4WwVQmz%2BrGxPDlbfExJMvdN7Kv8DCCkQABoMNjM3NDIzMTgzODA1Igwr%2Fk8uDz2y9eDSIX0q3AMkBWTWnDO3znZpv%2B4PmuYmr68Gc%2F8cp9OFV0t2jucMScgA3us8tkSTWHETkmW5GacfCz9yZw%2FYswQsaBVUAiY48NnDO1KZCcOPtZ5qiPthd6WKZOD7GhO1529xb1EqsBMTqtIo%2By2Jw0b%2BY6p%2F0Nx0QVtLT4gtOX97%2FFi46wm0matz0eaid1ekFRlWOSSkMoK383lz%2BnWu9E2achRiPwsVLb%2B3si%2FEmfZiNM%2FaeXIr7zAv37RooMKtxRFo1ORdNfZAm5zexTuu2bWdL5DpLf207EAriYUINduFlaRm9SL2Cg3hzv6RNxorq%2BXJY5GiCbiYWxomDCu0v%2FyYQbwWQUbD0VVF9W2fpAZrNhSQj7kJGXaZfsZEl62mCEv6%2B4ZVVgVtQxAkZgQaSxu3AdyImxNDGZheI%2Bmb2UvwoRHG3lqCqkQII9j6D%2BBPx2pOlQmRqlKuBpCI6P0AA8ImJc05RxFcn5nxe5vcZezXD8Tkb2rF1bH6MgdqVvV69C8YTpxg7x%2B72Qwn1Lcc%2BR9Z3buBSI1bN%2FLGMsXS6jqtsfI6kUMHr5ef%2BcV0131LIVS8WcdVtEs0c7WNCAhPyyBSeyAIzkDRUxfiy5r5ZIsXEKa1or6OtfPvODHuQvamA8aqVTCRk4e9BjqkAXLCg3WRpN3Qks7NNe04WtQpUaNzxAiYJC%2BDmTvir8npEDCJ29vC9h4Y97LbsdcFn4NhIFA%2FnWRMUQBTO2UEYU07D6K78D1KV6hDM9sWfsN7FG0rGNxNJFmUS1A4J9oPj5LSVvAf%2B9ZKzAAuOgkKqjKMLNMa%2FMDhYNMcHAMLv5wx%2BduJMyua%2FhYSqjxwcibJVCmHsycdUBACye1f4rCdUFSKdk75&X-Amz-Signature=37a2474752a4da01576e6c9f4fe34ab5df10115813a1f66f70325f30cb2f565a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
