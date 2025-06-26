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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHRLHWCP%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T100926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQDVqJfiiYwAbw2DGsm0Dkd7mDMOqvhHGGH4oBCjd%2B9SLAIhALETnG1htXBuZLaGPPhpeeZxiby8W2JXbGCgnntTpy%2BQKv8DCFoQABoMNjM3NDIzMTgzODA1IgxdBB5HRJK5dVwn6Lsq3AMtJp4wXZvY0rmhqUZ8w%2B5OA4N%2F%2BeipEY1CsPEPYeDfLh0flCn0YrOhCTgKsD9nAsTf3G7dbpn6SmZaQWAeKky6bi287IOuC%2B%2BE8KyBEE17BJf6FC7%2BzZXkDYYY%2F7yzZo1tydaWt4GEezfMrlCnRWGZrtReJu%2BcalKRaglsIVb%2FUBuyj3ozw1uWazuebQkBsOhID4UGXoxfFoEMyZxoMS7q1ViArWgsspq6Ps4uDK5mr88ODXWT0kOBlVUwxkfQLlwh4cWzbAoTqdlpspRRg3lICwe5Re8ZtZU28hlZitL5r4j%2FnBmMyF%2FkXnBvKF4r11ZpcD9tcCyv2NnuKUFsAg0%2FqUkJ5y%2FFtolFN%2F0ODitkuCdE9qdebnKPTHkqXrfIovWA8cukh65l9aANdbe01%2BovIr2684CcN01L%2Bm2dSkNB2pQ3zBX%2BWweKrhG%2BSuwbaCx6a6C1zX5A8m7NRQfZr0JdCq%2Fc9jnHZ2DEiPUY4qdng6w5C5u942By%2FKJViGGfbDFBuoglQ2dD%2Fd0Tt%2B%2BUaV1Dv1GfPAkHEPBKL7SL9LVL%2BgSM3evpd0irCbm4rI4uvVw0yTS%2FuW7jka%2B7Z%2BLrk7p4G%2FgdhPkrFP3e0aMyd6XX7O%2B3F8DO%2FAOQtv5A7zCxlvTCBjqkAdCIcslqUmYAyFAq9fdIUy3r6XKbs6CIw4sjllyDsTqRwF0ApCy42%2B8PEliQn0XQkX7c7b9PlTObKvxpstup2NHDohfK9fXgm%2F9ztM%2BY7fJIiSw2ZkPoLWgKvwJ%2Fowbh%2BfMbippCFuk3feT3HBZ9k7tHKyZB1VBCIFK%2FPFPuMD63NC2Uo8isrGG%2BBhSwu5TzEdbHoXNsbm8%2B052LKAY5V%2Bqj7NX7&X-Amz-Signature=15b88a362a909a9deae37078a3ca337f9080e11cdd244d3ae767675337d37e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
