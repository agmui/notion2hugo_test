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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HENQRZL%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcfKdetMMnFUZLPd2%2B%2FyYyJyBGYfeaIQBlYpGyldk%2BHgIhAN%2Bo2hoZqmaNNIYc6plpUwk%2BGmrtm3SPJwKhz8FwRXxLKv8DCCoQABoMNjM3NDIzMTgzODA1Igy7EJcvO2331f7hDEUq3APjjyH8nKiH8qM312J8HUdxrayIFMWKz0BsrEBnA61pBJRO3PIFkcC%2BQq%2Fvcpwsvew4s76n9jp%2FlpnqewuPWgK74hxV9rJZ2TVY4cgOBwOLfc0xZkI9OJodGaoV6JzEaW41F3gDuEXfu7nrFxg7ScnJcPf5IiaD5nXsZ68fcguOoNu11A62SD5OwFH8Vf6s%2B4fb2vPoNsvcM5JVJBy0k0rnQgd5mMGcXsqOTDx9F1F0vmp7D4jupJNq1R%2Bocr0HHHqd82mZOeB8qH%2BUWfZkAKaG05W%2BGYS9c%2BWNQ4ITUbYTa1u1Nrokkg2RyY6BGtBcObtLnXnCkFsyCE5Ot61bTtpoobZF2NDmlYzbbnquS1sTISb0Ua7EYLSgqHLG%2FuMcB%2B64FZYogyMpQpt2tnjFz%2Fv%2FNY%2BxNBX0QOj5RZqoVC6%2FmOzMF0AUaFg662vMim2xFzighsQncya23maxPvZeMwjV8Qdvrla0%2BAIduSC29BpyQYGZK6mmCfTd9UCN48cBG7WN1KmeHmL9EdOi8rL3qgilE%2FWrkcL0iIYKFwwS4PxbLY%2F6a1qCBxOCdjyN9CI69oKAxzajEMx7AzqVps1ZFAiACWaHdid7PkOlYDXWrRM2h1ERbCQFBBxgmsWTgDD%2B0qW%2BBjqkARJ4Oj%2Bem%2Bij%2F3AR9NB4Q0bTVd4ypPaIpbwsHLMBl%2BqtUwA2RfFTTe2TMTWISzOE6usTqU5J5SXv52RqW6GviwKTM1FwjjF3N%2BK1TuN5gl%2FaGSwjSfvVcxapww8BI8b5KuH39yP2VB4hiRobutxyASGbatRs8EGXIwZK5BR5Z8gEBHo2v5TOrIjyITvOXBGXL7qKIaPltlRFoxcRbFFCKypDA5GK&X-Amz-Signature=a27e4841bad19d8697413844ef960bf9ef2d17828f7f8bb7a4479000a1cf6261&X-Amz-SignedHeaders=host&x-id=GetObject)

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
