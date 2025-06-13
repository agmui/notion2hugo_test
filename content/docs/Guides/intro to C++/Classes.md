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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHLF5ZDQ%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T121556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIGT8pfVmoqbuVxmWN%2BaqU1Oimw0Jjq5drVNF9K79u4vUAiEA6Kk5df4VnOrvegeZMSK3BUgWe2QmasWlkiP8HtyMAkkq%2FwMIFRAAGgw2Mzc0MjMxODM4MDUiDMt7uETBLP%2Bw7T0FaCrcA9gNyjilpPEwsKtP1509QpdKCRJerAC9N1XRg%2FnnydKoMHm8PM1qjh%2B9DT1wZpfwQrydqwCbQhwA3X00ES7RVgWyvm2tdMr8%2FO4jXG8CgWEniLew1z5aeDGRKvkUjUWcZ1GnqHu7pOfyEW3TcBssydpIuNpvOpkRQdae1SUt2LIhwo7vtQRBm%2B6ea3u1V3r0g7oOOR0j5dH5xs65jwqEazB5RGe2zDfy%2FjHLvF8oJel7WEh7n765YyAeHXdkheB4CSt6%2FEveRaqaOHEM5Q1luTCDkuxUJqHXAIb0lJFXkrLiHMtZr1MvN5bHK2RqpAPduEGW5TuWxnpUIM8AIRSD4A%2BdouRxQOTP8nE8uVaT3%2F0snrNF7A73C8TkljNEbrwS92HhIjKt%2BeHDRA%2FzpTcX%2FOvxfm0H5lnSHcj%2B17D69yLH5y%2BwuC7kbOLu%2Fadru9vgr93Ti5Gv0kgglWE%2B9ozqWjSX%2B39mAOrAYrKMnKDK52F3QsWZZq0DPR2apZB0rUbO42%2BFNvVxrFgx9gF8rsbMY97yLYqHFbcD77eWFG3qe1I3yIyhFZ%2FZQQZCYxJTD2KSiKVru7UFv556Ci%2BR9ICjBuyeq%2FEBf3%2BF9p02LKefmw6HMGZatXGnsIV4BR28MIOqsMIGOqUBbkeSCBt76CWp4yxzISlap2nnsT5EUv8sehJ6ko7ZtT98oN8%2B%2Fro3WdbzGortUx4kFcE303W76bBCUGySBT5kG54ZZIsUMY8yK4SkHDLuFHKH9pQe0GO8psDkRyG3nmdea%2F00nScSZ9QXt9%2FosJZ3E6GIpzzUbK5a0dAmLwAK1IMToyiO88zkZuDaasaubkG6hrwwqMmYM5TkLRUVSGuc0e9Gut9w&X-Amz-Signature=40a7293639025d80543700416435d95809ed3f8f6148420280defd18d83a82bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
