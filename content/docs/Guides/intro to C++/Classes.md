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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBZXBIHB%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T004244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIQDjfo2ATooTt8wIJSbdtpHOhv3y0265XBTCTYvTFgcoZgIgW6Z5fA0sOc62jiHl%2BzLzrhLEF07Ad09WvfFs1S59MvsqiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA6bB6gi8qDrzw5jvyrcA6%2BEn1LhF22yD8SSBYVtRtTv596BAiiZrP1ruDQzFscVbk%2Bt914Us%2FJxjJ02HL%2Fc%2FPu%2B5AbWdSbgaWSrYGH1e6JfAVfmeD3l6chPGvioE1RxU2w6jaT0ueQbNsqkD7KoO46MJnRIl6CVDUG0%2Fa8lpqEfyZkteCQoEtgfyq6RtBG0cm9cmivdZhJLJQc0opH2ejjUJTS%2FC4jzYiuYTlDZxqt2VdAVVz8ZoYdoXWbjYnmY98FWBDNDo5sVd9vL3olr8jOm6smtITYNuZ1ZFvHtYFLQWry0wx6aXsFvYf8fxb4k%2BZCGR6%2FrHkFpBRvJR3SnuSey60jMXHIMbfnCYAPfQ73G79kDkvWw5C%2BiVpB4hkcaKHFuSKOms6HQv1ZrN9q%2BsHhRrZduOeto%2BpVl9pkzuHItAy5m%2BPM7UphcERlbgRTC0QU7I7aDQWrl7FkEp76n3asZrlb%2FvN23mZV3oX005NEycU6Cs6YUH3s718g3T02fI3mNFa78ZEpclVU3o0tuRQQMCm4c0lPscYe%2BgYnqj%2FPpTc9hfLcU4ywHQ4AB6kpcYuZiDkFxPFsfNp7SXSPpb5GPYxWZzmmQ7gA6YWwC89uubb72B%2FuxK7ZLM%2BeTTk9jNEhoMZOGHoz20TQgMJe5rcIGOqUBpR31LzbO7eUtoMJ6LX9ZmvaOAF7Sm9TvWojLGudeEcurvTHOv30kGAyLZGJRo7%2FBxz6KiJ3IyNfR4QSPBNzUoEG2%2FVpTui2Cm4swDjdP88P6s3TzV74fo0Cf%2F6J8foPlvgcL8xzfJMIJ43Zpl34o%2BX5CAHTSRr%2FWTQM3tliG6i6xWUPwDRtD%2F0poDoQYlsaM0pyyfhsjleHpFA53L3tPZBYj8YDb&X-Amz-Signature=07b966d062f5a087ed98ca9f0a4ea4c7b390e82cf13f13bc3aa607b489629d80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
