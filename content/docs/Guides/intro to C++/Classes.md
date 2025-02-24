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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W5ITERI%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T100915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtDoirX70cTs6nRTkPybZkWaw8HznNKUvlUXBwxCYmxgIhAJIBlt%2Bs68kTLJvTzxFM4In4vAV3mSU43lh9aHTsMtDiKv8DCCoQABoMNjM3NDIzMTgzODA1IgxJ0I9B41bDc8TCr6Iq3ANC3A0OnNoS%2FhSYZJmQwgXfaqa7qE8rty3dBKwc61z2QA%2Be%2BuQeSRmmjmS4EHfvI%2FiyayFR80JmxNsMg%2BUu3yq%2BUqMUM3J5HPYOLzGNUu43EJVDvzC%2FFuwiVahw17Ahsyvrigq8IDrjcZ8geBaIrKzs%2FR%2F4lBgnMKHnL0UwmDNbf%2F3vhkK2J68sS2MfMqBdI8HPIYif83qdp8jzjs7G9eNdXnHkfuGqR4BDdpKE%2BEcjlc7035cn8mX%2Bq2EPaAX0NhzdXhtnJUhjJkVv98Nr0WgfRe5EPRctFEwH9zreCbwl16xy6cwSwC66qKzyQPBZPZ1tl7sfRV3KVNS9un1yt8hb4qb%2BpgZojM0G92ItM%2Bg3Hy%2B3At6RO64xzyU2BXKYi4dlwb%2BaQsceH5jIJ%2FkVk5Q2w1uvXiJdhljtOMxbyvoWmKrb6zBzcFD%2Bw0H1Yqz4CDqSCqQaPahHMZ%2BQJNCYwNhX7le%2BZgF11lFTseBa4FmUCfSdh5c2wJ9XLXURkSXUdvZCI3HanKs19kGXB%2FgwNkPN62LnMOF3vYslhuIxqMGaXucQKrelFUPHdHqA9ciaaaeqAu6F86ileeMu%2BKTUXKEghluNkN%2FMxzMu2cy3Jc6YTtBvu2hXzczEPX8TQTDw6vC9BjqkATeIEFeE6%2BKtvAFDHkeBuzjdGJQ3J%2BQrf4xdj3EJQdNyLl08WzAv4DA9jJ0Z2J66zZDBs%2BsuduQlkXwphFMpiFFrWGhK3UCy%2FDnPiKaCbflx92IdLE8qrzmYeK2czl90chI7EODJtEBc8itvgsRiXbOk5fmRhD0XOhAn0GoLfBdEXhgHEeY9auJV%2FPn1W78TBvC8naO8HrsL%2FnlednnSObiPw7El&X-Amz-Signature=41b841dfa5547d2096b0811efc3648dce7833c62283af6d6e1808b221e6ba91c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
