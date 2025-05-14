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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQRXLBVR%2F20250514%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250514T181120Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIA71vxlqKRTlxYizNsm%2Frg97ZMtVznJzvKaZLWhb7s%2FAAiAMT%2B%2BZiwFN%2BO1p5vUmJ%2F9PN8XVKNLnKqZmCsvDrVZ8FSr%2FAwgbEAAaDDYzNzQyMzE4MzgwNSIMuAu5ok0dQpfnX9TQKtwDks23fxLpVaMi0yI%2BUqu8FRaqwKK1dj%2FB9W46g0Hu7V%2BzIehpHYGoal1da7mDq5h90yusIr0Cvf5CxAbCEEYIE0gMo%2BuMefQpuars1EbZXjaM64%2BNnZi9AxNAV%2FXmHlpPTDzWrCqojuZZElUHslLLi%2FJkOmCA16lEv2dA26TIe3pRGM2gTARxfbANZ3TByFL%2FXYLLGhxdB7W29TvZSsYd6SlL4me3oesviDzK8O%2FRurYElHnWUD3d7W0WGb5%2BTP%2FsscPdNR9pmyThIqCCLWO58aK4jrIU3H34oLrSIScAKntxp%2BTIqCHdzPnKRbKBSyKZC6IVg3Qi8d%2BN3WxFfJgtMHmeQjJ8hmD4%2Bgx78qNBynyDCVs0kY7Id8f1lrwHrolhgL9OTXW2XP3IlgmycaGbXldZBqtUslKTU1CkGy9x0kUn6zT%2BMSnE27dJy6AQmPp556ho7ACQYxCN7CaJRLT5NErAvaa2%2F5H0MV1aSwoY1IYuhLkeny2tTQS75B2jVvqv4sCbQWJmeLvUuhLFOkIfBHLmnT8%2BUVzdrmVbgGuj7DpUItPLcMRWXFo3MtUZUNEGL0lDCYfL9gtwlE5UPcqrWuzl%2FrgG4fFbjDSNv80dKBFNuKwEUiNMPycrwkowvKSTwQY6pgEN6S0%2BxGm6qjKQCVv1szv652kXfLXl2GJ0oYxArMLjdwqD%2BNrHfJJIgGROReLswM76aBuNi5%2BbiJHncgjf%2FcaLKzFH0b%2FD1cQX1p1cUMF9NN2E%2BOwhXnVA6pI8MOuCW%2BknykcggcICrTxmG%2BjAGZHojFHoRvgWiuaSPG7Zdxw0AawY2IRz9qkjvuF46lrIRyCxBABxJkeXxuUKEkmScgEHBMdUFQij&X-Amz-Signature=af1b2e21a9d999627ce3dca11a77ac2e41365ceedc25ec268e41b16f9927d9f6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
