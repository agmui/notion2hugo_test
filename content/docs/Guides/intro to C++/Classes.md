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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTFUNVKY%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T141457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQDaCi76DFlmYERmZP6ojvFnm6DXoW1Jsf0VblJzPO31rQIhAM6cTKTlUP40UNHYgMxg9ZZVpSIFC3sxYPchvSiLZ6ivKv8DCF4QABoMNjM3NDIzMTgzODA1Igw98IUpPnFn%2BSunkUkq3AN7SrPlAwTUfT4Sy0ubuo9A5VvaG805z1fbdBlOSxTjYqKu8EYcFmQUjOZ7wrmlLC3ZUWjXdnW9PnWWzK0A8uqC7iFB8OvXDlkCq27t53QKuh0LWw6QDTOUHW2rnwqnwi2MdOdklXC%2FToCehE6n8G%2F6oeMSntqpWkdvmwJXwe5uSNnu9J6cerQTcZWQKVqFA63O1cjU8phZq3pCA6BDEiTXm3S9AIzNn9zx3YvKHgGIIxP1M6l2WL0M%2BQNlNKwnDmVQtJHxaKW2IFJogz1gKUqXLA6MmjO7weELL8LYJXrI7TV85ye%2F1on%2Bl2pmcl4SZmDmvapAPVDQP26rm%2FF9nUnY83C%2BvUqg7TL7TP8ursmLNs%2B%2BtT2829DgnmEGiDcWlxTHzJYqlhqPE2XPPOBOdwZtcH76bitlArzSovFnWpA6%2Bs91ZK2z7P8Vk8VN2TfR5dvvlfdzmf%2FwAJmZUvzJbcxSNf4tUkm%2BFlW15RRInmRvgeUjgqgQUKdHDcU0VEmdSGfHWMBS%2F6u2RhEK0L4Qfhu%2B36TAjfjkEGBp4d%2FZWm5rhoSuCqU30%2FIOE5R6WYWII0%2BACBCRvrwRaSXV%2F9eXhYRht9DRNqhfLy6vMqm5fOonDtmqNLsIheF4I5%2BDnDDwg8jEBjqkAZeV2AM6Glh%2FXHLvMKXmJTf2e9vbZAQRfJnF1JXVKaULfufoNWLOciWNUu%2FY3v%2F5XDwUi1WJizvka0iGSDDj2n59JUQa0hubrK%2FKf43xOdSaxtqbRuMAarWlitu3xF9Ix7MOD2e%2BxmQYUY0XRBsj9M9gWpmZkCjqIUtj88yk1uSYuqI%2FHp55kuD7oWpIcZM%2BU5T4oG8WJJbGcsZExYuLl7%2Fag4cr&X-Amz-Signature=fd1ae5f02c617cd3574b12b5b067f2973e5c1e86841ced512d90c55d3ceb042e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
