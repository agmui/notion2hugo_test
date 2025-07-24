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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663BWJEGU4%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIBNPJuqiHO8zFOGKRvs7ou0V%2FooPY9arGFa3XexxgbktAiA5guk%2FlXYf8jWMa55m51lMSWqljCPVyIumE8xuo6psoCr%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMK7IkSsieLEfQPWrVKtwD%2FwU0niECighkz24IkJY8X6QsoqToKw%2B%2F4ynlgnTgWyAkIhWIGJrnnKLYwrH9FO2mGzhdFyR1FoLwYm46Fj4sMX5jFK3iP0mYJ2gJfANyLelVstJSj5BrQhYR2GH0jdnqhTeleFKPR15As407dpmJaqt%2BurAO1i4yg1RDC%2FHTdg2jR%2BbHdVJk9%2BVkOhnMom3ZYIqcOVbPTdqlxDmwOTD0D5AkJHHTguRzD4UMGSYZ6UmgAhOxPe61SWj2%2FcuCx1vvc4v0v%2BI727K8N8rAOtYJvSHCYWg%2Fxo0lsMjZy0o82hLLh3U1pl%2BpkwtbkX8MsCQjV9YM1CTJvzmpm0acvtayT%2FNfGKaip1x04q6jFqrObOFpczjxCOmKXXLqo9IbfsFtWvlaATjclIOsPQsZwAhlB49Ws15Kys5RjmslAg08PzZEGR0nJM%2B45FfPFo4I3c8YJbHFjU0A27ucpMwBig88aj0pxXDinWfSUYfun%2F5GmUthI%2BcGo0Pqgy0WJWnL7UcJDKfbWX4udZa6I4Wk5g4JBnqQBJfc0Zg2nI8HY%2FQdOma97RZb39iYtIigZQjqdL8wvrYaB2om8zdxllRO3IQ7raeNNC1xK03kCM4WS2R6ERg%2BevpDWNjcz5ixEfwwnJCKxAY6pgF%2FKAdskJagZzA5OZSzqrnhWbiFGWIeFBICIy11dbocLGLMdtyriLgbvmhmWLmKokzWGlaPp%2BCSYcnPRN1YMqM5aC%2B1nqaXkEJJgkW5G1FKQByphqRi1OVVKwso5kleXyEe8SgEgSPdLVV%2FcHM7uS0RWb2RYU1iTmt6Qqn%2Bl%2FslitcFOFYI8I6IU4Wmw9%2FDBxJdZKzUBiGFC5djAglV2IZck3wQsQ1m&X-Amz-Signature=351a2137cfd5521867b9ddb4fc0405ecf1221e0615084b7ea0b220dfbf0b4a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
