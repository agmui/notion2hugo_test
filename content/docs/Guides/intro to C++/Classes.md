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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RXR3CO7%2F20250210%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250210T003705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDed8peQzf89Tg6i1q7U3%2Fnv3clXeMi5%2B2UKEHAT9sdwwIhAJtppWQOo2jpuygnVm5Gf7IyVkBNCDeIoAPWvCDEMtUdKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2FIm9AduXH6Uq73bIq3AMO%2BNbuOuhCp5TtXUotBn3pnqz8oUahFLJO7rjXR4Qco35f%2FLRcHd04PbHaQ0Z%2BbruBh%2B8CW8m6nn36FReT9diyR7RQ8FHFjuZY4xvW9MvwsEFSF0MVhiQ3Gh%2FDi6LY3Q9KV6F9vKjLW8d61%2Bi5gDz5KvBg3avMiY%2BgdkDdr2nmvv8OnKEq53gEfKzTFffwiyx0m1%2BD1%2BsfvZSccgsDYBqcrK6jWRRKOx4bu5Jf%2Fpcw1XoGw5IkQl%2BKV57Rhnb4AFXBZ9ZLyxxaJRgvrblbQ3HXzmomJ4N%2B2eqmlC4rvOjUioqlrMNSDt%2Fe26xiJ5%2ByxD6MF%2BymbfEJMjinAuKuNdovqAD2EG6rKhvCdtW2TL8f1qJYEB64%2B7t2GdLmYaB8QQ%2BrAjbAtqtQuuJdbooRUnV6HKZsyg%2Fo1trh9ynElNpp%2FlpSV%2FzDp3aA0mcY1YBzph4%2FV35Mfi5v2xq%2B9an8M0WODJNfWskzhTIaN4mVZFUZ8vx%2B5Xs%2BV0VR%2FSOSmpUcJvMJiu05VBPuhHzx1ZIp5xOYpin4fqQ3ip6uzSGioNqBpWOdFltxWn%2FCP7s1kWTZP86YnungDAodC390TwZ73KuEF9HEpHZV4b6%2Fvr1aTrQb9FWAGPwmLvHayaS94zDI4KS9BjqkAebJntyRKK8%2FaqhTSQ9U%2B5387TX3xTvobucJQhYXLT7wUGNPX%2BEsiVtKq0eBFTqPKvq8osLpTC8yaFh2SCdIVOH%2Fge4%2Bd4DO%2BZsgE%2FVGklVoZ4EqXHg%2FZJ%2BQKxJji8tXZ3rXGjtPbFV%2FG6N7Ald0ow%2FNTgUMALKKdd%2FbcRS13T9ge%2FvBLx6Cr4qM%2BfZadmfW%2F5lRjxPZvI6CjFlQ9z%2FLLaOwjmKd&X-Amz-Signature=47020324fae39f0cb833a4ea3320bbaa7d45f7dc387de92d13f9ecb940e63d36&X-Amz-SignedHeaders=host&x-id=GetObject)

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
