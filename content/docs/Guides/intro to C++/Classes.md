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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645JP54FP%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T230837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC5FAvn7wdV26HA9gO8Hac2ToB1q2NbsDCzvxTM3MnQEAIhAL%2BPVpEzsSyBGCT%2BtzaFh6NpWtBv1Aelb%2FU02qQLdNaqKv8DCE4QABoMNjM3NDIzMTgzODA1Igx79W2WuT20E3Im%2BB8q3AMiKfR8exhTCXeet8D39RSw5p6H9ACx%2F3ogmBAz%2FgL0UfQ3GRReFecG1oyu7ZORVEsiZT4LHKtR5P%2BYjJ6DzXtHgdlj9G7TZOn57KlNLtQy3oWEU5fNvobRsklkaGnRzgoAUGFRqRr3GZzuZYjBBoEriDGj4F5zeuoxS8HF5B9bwkbzHQ%2BhCDBxk3DIqbsBU3%2BLeTL2QZFQ6Xm%2BhIB7dtoiCdUF9oUhCzsOpZen8jESUMOOvACdPudaAtgRO2RxxIZPfssvTELu9JxogM7h2g66CiTKAeOAhP1MT%2FSydQLg6UHeap29%2F%2BpvrXUITI7PbpbdqrPzJ1mnVzf4ACOH%2Bi20FcnRVUOV2Frmvf5lFZaS4L04z6N1mC2eQtcP7Cbg3VAPBzoGoxvfojc6UT7tYssPZFFyvcJTjtpi6m4gTLCg%2BrAxkP9oGk0lx9hME9Qux2lQNGCl%2F%2BTBMaZ7ZwTszmOIW0lF7YqkE20rBYe0IprtEflR0w1uyAd9QOzk4F%2B%2BLqFanrl1QBMrPGeuyyz%2BOAeCt%2BfP4q6zODkXA6ffsHY1umb5xIAMs4qLM6NNM5uJ6ERLQIjfCK6DhZ02LB3O4cEt50f4Vj1CIlk9eIT0223tqsLNhmimJL1%2FW40lDzCjuvHCBjqkAX0hevy%2Fs%2FhqKicnTuzjVbDouLLwlH7K7nSM2hyPipRrO3Y9ncmnfQAfLRhz%2FkmyGOJvTb6k%2Bqo3IIGXATF4TfU%2BaDdtXGU%2BXQq5OWtI43mM3MteJXwQZ2HSwJMmJDGSzzIKXx2XteLrLhvdbuOP9kqjgncjp8cUYjIsox9XVDa0Gs3qYMKt7qMWJ68%2BLUaWjyd6Wj9wprCJ1Q10jDAm583hUFSv&X-Amz-Signature=32d21e446cb08686c00ab9cf8f7e011a030cdf4d96ddcb0add91cfbcf7f828ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
