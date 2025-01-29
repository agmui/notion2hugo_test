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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXYA2WWO%2F20250129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250129T090807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxi5XpzyGDtDPRj943dcpmYk2cGdKxr2Cy5HQDu9HCzQIhAJHa%2FnB65lrs71YKKAMgi7HnNRM1TBPty1YAARGaIwsaKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzPEF3Ad%2Bn0%2BKtBPL8q3AMXSPrjt3WlXN4lvY%2FfOqrOEXQ9j8prcNzC0F13MNm%2FzTNKmeAENzQpzH3d6IxALy1tTpzvr8rEgio9dtgdbGYnRJc6Pv8HBF%2F2chyerltbeq7Zi%2BiVtd9OsY8whVQfI7yApfW6HFl1Enc%2B1ccuGjR4UIq38wkMfrlAL2IpBOBlB9ccGORE2qFGNujJ0MJmXA52zMMFuTNR9IbF24pi7y07phMBAf86EW%2BaFu3FJM9FxOdJVmMc%2FIHUKD6qqG4nznoPVC4W40mSuc1M%2FKz2tesPXKuz%2FRQ9MehfXjYPvdc7X%2BHGl1rLiEdnSYra86ngmOpUEY8eVHiMLKdT3ccaG1Vrsd0a63LG2EE%2BV3scUyqweVFOMO5KhvgY5zw8dwaXr6QStK7tjqQNcXa8IgmN6xr6RkrJ8oREnGOp7SXBqFRW6q0DUtV6IXo56LT5K%2BbG7AroVhiEzSrHJ5lbawAV7ObUL0d1lT%2Bqt7dHFf05ytPxjIWoSdCfCaF08RW1QawFYCv99bqSAKRq8D%2FDnZxpkF4w8kwhNK7EJq4KKLEvoH3teCInlZp2kOO5yZkbFLaJ9j%2FMHXjsO0Cfp6ocq0MccH7UjNNn5Q%2B68heGUPa0iAlMJQEHgaRdfMhayJtPezDlyOe8BjqkASGISeiRrlz60Q7OpglM69JEggY1ZMUiw7XtATH0iBYBxHerm9YTfS9jXj2w1A%2BmXl2hVdj0TxheMTIVZRDrXAcgtiyQ41jGuu05ukGc3mxThb2axHUOQEYYFS2RpHt5luT21%2FsqOlkNVOqsRuWHSAl1HnC2dR%2BE3eeo2wv5QobHvYjVOgADk8KR%2FfUPO%2Fvy%2FP267ppkqtQzPQ3KLNkjK%2FKl1Q%2Fd&X-Amz-Signature=4e5704745cfe7d3f7e6071313e809b3e6beebd92621091e5b48a56d098aeb741&X-Amz-SignedHeaders=host&x-id=GetObject)

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
