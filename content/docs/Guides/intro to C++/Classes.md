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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYLSL7TM%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T043758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCIQCKqx4XlOloC1yVoLzAhr86X6MhA3pBsrGMWBu0oCdPBQIgQ78dUHqwtj7r%2B8Z1cRFFdm2BuPaVyROCHvTcwW%2FFgw8qiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEOxDrFpwajldpHPtSrcA%2BwsD0q5XBD%2F1%2FZhfursAujkHc2OBiEfhOz%2FEJFQgefa9iydZruDAhzTtLnrWua5cL%2BOnpcniExJ2A7Iz5UF649PQdf5WVbVL35PIU%2BheT7Wj98nWm5vU6%2FpF1ut8tVXTGw6cr4LnvxlZccUUaNo%2FZHxa9bfl0H2l6qhOL%2FPbFmpdvqEFyF%2BLr5WxQsZqMEQPak4gQygQ51jetyQQvNl%2FgRVAwD%2FbIkwF3T%2B4IY%2FC7FHaKO%2BmlBqGq1ZijLPok%2ByCmTQZ4KQlzToi3De28MXh7U%2BRwZ%2FWK55hCce37Zm6EIa0AH1wMUGFtAJ%2BdPxXfe8Qe%2FFAVtB1Ik1I1xkUp7qz1DD8u%2FBSZ9W23h8BIEzoaFfjVFGguZQDo1zgboA%2FVPa8klUPXjNGjO5KAAaB2LfOZcbYaOkvwQ4eUug7hUq8lh%2FLbO48rIXITrRD7ta1myf0SAz66EJAHUFAIUITooGJ86hX79rdF5CeV89aftyAcie21MKB3z%2Fm%2B%2FmjP9jQBzkLla4h%2Bb5NMhnC5m8iuTtg3GsU%2FvciGW8jv%2FN1XrR5g644SEvH2IMh3jaAXd3KXuHXDw2t0%2FOuWkWkxqKFyf%2FPFFDehDGpbczUTX66WVgKg1OM%2FGJUYjCBfmVUzGFML%2FNoMQGOqUBhEt9PUJTOCW5hg%2BniTbxscfDMR1DF%2B0%2FAyg9lM69yQPEaIwonpl9JQb3Vc%2FDbhnzih7wL7S1mA6Dj19v8t6RkzGccp9lONUx7GOiNpAfbRHvKa%2FeI9a8GdPgZD%2Fo00TN2GCLq4s%2Fpdm5F%2F7fM9VaZiU1Fw%2BWeOpmYxvdiy%2F%2BmfwrXymi1tXgTFDKr1EdmRTSj45D7n6MMhfdxeOpGvY7mgDPb6qd&X-Amz-Signature=c1f29215643b2a11e5953f78d6dbba42619f4bef5943a48fda469d42e8b8d7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
