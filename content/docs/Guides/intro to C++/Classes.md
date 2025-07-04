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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDKORS2K%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJIMEYCIQC8K0JGVldWQ7bzQP5EtNqWrD%2BFpOsqi0tPcNuygwg9HgIhAIVHxz4tWhnRXI9QARLNqAFcu%2B1jI5dm%2F00TchKi1dPLKv8DCDUQABoMNjM3NDIzMTgzODA1Igwos1jgDJrTphJpvfEq3ANFJyVNYKphYqEvhBVtiz%2BfKiVnhyv4MWlihRsiyK74KBIsLfZsCRvra4Z41Vgf7jK%2FcfHTfMOQHmJboqFDuXRCRCPGRZyZ%2Fi9pojaGzkD81La7Au0EJjma3vggd6DCXQMQ0sMzzYUZNVvXqq8AchacTcGQ50H86acm25Y%2FeXwxzVEK3KTnxxMjCGu7BiHpXHImYpUWH1aLh07OXtmurN3MZsF%2FzCHloTdd0SBXKNFJm8t8eigSj5XCmqnGgXybiqFT5CZBC8B2D3bT%2BQ78MdHlQRsxebJnufmwG49YSzGBbQQGqvn5NbIZ5OVpWDfLlrvIPPmvw%2FIjaoyVEWxppGUWTmqKrXsjnro%2FHWHhceZZhD7mES1P2%2F8KW9bNenH595Qn6iBSXphNd%2Bgi8ztVqmv4AEyFZsqQpya59vXzTAwhSCgqnXmb86zCdXQ7UVYK6MNkakUKCoNZMn68%2FhLtsTixaoamOTkqJ5JCcJv9lGOQdgb5YZBUcdhH2N5Og2F7irrsKpqJITgbRy5qpQXbtloCZwuRH8eZIF001TwZtFeorZYuCgAMVCWOld%2FHS2NIzsTfF7X0Z%2FlB%2F%2FcYsrFuIsK9WbRjfxX55Rw3ix0BmZ5V%2FefwuSlSwE8A88wVcTCO6KDDBjqkAbfC%2BOpSLKE9ocuVBoc833ZiKjLyKSc%2Bcixdbv8UphktmvBqupJdxDM851HwpOYd%2Fm1djVR1T9sO6OPM%2FYNmvCeWmXsD6Bi5NjmwmQscFJCq157%2F1LGg03QJ3PuyGwl4Bkgo5EscfBaELPffmyTeyXadFh5N0Jhok2sKvwijNVcMm45N7UK61%2BhBEK7MAr%2BYm4H9F6bb5CQYpi3I7Z7hv3wfT1o6&X-Amz-Signature=15dfcfe529131e92517640c01b089f31d09355841f2382e807078a7c6bddedc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
