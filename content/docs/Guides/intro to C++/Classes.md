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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667M4H7BRQ%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T021818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCzK08TZg4F1Hb0HHZmW10d3811NIADqrM5cpRIIJNxyQIhALiJwWi2E6aIhpojg88rLSVrOXg7GgRj%2FYyUKOVmd326Kv8DCDoQABoMNjM3NDIzMTgzODA1IgybpSK8ks2XYesy3pgq3AMHMmgJ9VtMPdlZaT%2BgQix91tstjn0q%2BzED%2Bi47dIIEdxviqoicPB6eNZT6bOWvu6gk03A2MbaHSsvFsNdfzslRdu67XPOEV%2FiRDU7N56VM5lwgStd0lcv%2FH6p3CzvzNoRHIQCIxuFGefoLG%2BXXBjv37wpgzh%2B9Tp4FYXP%2B5ONp%2FSzOUJ8mgHp51V%2Bl7jOcyOFfQWiHEDmWmN2FXvfw3nEU2EeoDaQVBNIATxd6KXF4aLuXp15c%2BjOXl4KQC%2B4BHPF%2Fzhw3V3g5t19TNH0H3cD8SnCQd5G9qMIZeDQwczaa%2B1KmsRicjgVn6AbJpRzfrYQZASfiOBHYW09UJKWtK0N9wtPae2%2Fddlwf%2FVFzavkm7A5MRjVxwmjlgLYxEfo3KOIkuEDEAjj8azEmemOlYryuX8xrH9E%2BKtw4jVWcumYf%2B6hy7ADKzGgTDl1ez6mEVdQe67rDXnFsJh6xq56X4UkXwe8im5egtAUjUm2J36UW2Ak14g2OLpaRfVeXEH0c43JWOU6O2j8ZXSuIxIIKgy5lvLWDWD%2ButhXWtFh7NSdxKLhFoDaUmzxAvPbH9AJfHNEYoW8o5a4zFaXs2YcEyCllUt0vzegcAGX6Kp4ctCY4Qr6L2a6edoFjkKwUijC68N2%2BBjqkAY88NA3wlpdT2oYxuKhUSuCzHMdUVD8PUrbUyDvD1f7G18HVvmLQ4FL0Bj%2FjyBjCzr1a%2BnZ6j22%2F3fj2bokvQtbZ%2FyvbvUnfKtgn5%2FwvpTAr6y8BIdvZog5PCwZATR2QhCeVI2PAvd2W0Mf90NaCGS4bpNONgNJh1VzhotdAKHJDZOhJ3hmJ78rkppikVC2Od8Nh0oTIDtP3E0xWwwm1F8XVHhEp&X-Amz-Signature=c7175ca6a8cfd12b78d7996a00fb0605f9ebb8146fb40d0e2f0b29d1c188d125&X-Amz-SignedHeaders=host&x-id=GetObject)

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
