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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHWI4AAN%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T121559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJTH%2FTF%2BRARmPNL39r3m8tmbjXbn7kYnAEEHsG58PHLAiEA6c2nQzMpwAsL1sTgkYF4%2BHeiU0bQz1drNeWWZiFvhf8qiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMfAIwILlukhJjRO9CrcAwymeGV5YPG1%2BRts%2BawxKVznECAHS6EC8Xk4feVmWK23eHVKZB23WTYXlO3eJRGVxyJXRMJhnzDwIe04ckZPqdHNre%2B6ES6vJfr0ZVQI0W64UhMW92XwWVSUhg824GyL76jqXOl%2B52JRjP%2F6DLMunOHdaJzqVOwjlEydh0K4RBAr%2B4ZGs65thX4vrNjY0AphcrLgVpgbOYJ%2Fea7%2BcRvZQUCx7M%2BmIQ32W1OswjUTtxpA50SGjj74CG6OAfC%2FGMEDvRO0rcxrEbX1qmKHmjDrRjYaaCMtvmytyYvCfmYilQKJj0WUKh0lYHeh9fkPoh1bxhXwKNiUGQvf7UySSWuDm9UwO4i8oXjAnSB4QG29QVcxyvR6zBLIVXwp8LTrcJCF4OfyC8PGMV7Mr9zYZLZU5HNwd%2Blb0rYFuXyNv5A35pVTAE81roMFZbN4O%2F8e1twPkLAF5gKRIBv9YTD7oAa%2BDVRkqcPo%2B7Y4HiuGAs2A3KS7TuWYFW0dcjPJZFWgIo%2FmkHVhS%2BcXZCBsMfGpLgKEm%2BIV8MFMJtM92Zzpi5Wmdue6zS%2B%2FQ42PsgEVIAdKagh60hyVPBpOG0Nsa4NECoVV2kvuE2yjV0kLoCOIyV5t6%2B96b8r4seRsqJuRbNKHMKitscEGOqUBbvGSMYMV0p%2FL%2BIsiBSGcr1%2By%2FUUJ6Q%2B3oczGa6z%2FgsvUZj1lhYfOS4JLdnDsw9q8pVrcMpFc5lSkgsgclT2dYiF6sdCKCgTBAWxeLsSaAdovcQLGR%2FXaySquhJUWGX9MmTCsZIT5VpEYt01NvGml5RqAJouYmiTA5dfBkRjpa3w6wnNyp9QZGuo%2FsUM7oaQOAHQulw0czDG1eSBBbjg%2BAqujD%2Fjg&X-Amz-Signature=076a2379350158c69010aaca6f25d0c64e1ca8ccaf891aa1bea38acd885cb5b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
