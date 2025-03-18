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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666POWIYHC%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T090854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJGMEQCIFeB%2BZFT6qiC9LnwZq5pxqqfTB7Oc4Ishmo61AvP95clAiB0RfkG1QE0I5PjHKL3QWfk4uEttqscfnGMKuRO0RRaRSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRGEuTFD27klvAdmXKtwDQQaRektFgGk9T6xnGowywIXUg1ZCqQd4cDBjFe%2BjxJegprJ%2FmS9lAYuiq4tZzoRsX0dl9eutEFbkM5fHlTEoAmmktEK7bWIw4ovAKx%2BheBxukSgMMKz3nzg%2FTLkTXxOH8dYh1qFhNWM62gFWgKr8cDykWBuBYRz1X%2BAzp4DMN%2FnRUqQdDCE83LBq%2B9Q5QbTZ%2BA6OKOVc%2BHdX36Bi0ogHI6ImO7fSYCpyaYZnS%2Brl7xSetXEWAoIJk90eRS18mOjmJbOjvCZv3wFrQ3NOmn4Eiu5tuTwe3Ca%2F%2Fs2knH%2BC36bQYtBIuT9mIlfabt%2FOj2TMzWlWVxEDFmBNYe96E70Wvq74tTDSkwZazg6yd6NS410C%2BXHUb9YfkSyhy2tWa02PSQRYpWG6e%2B1JVOq2dm94Tl%2BwoXxnpCu93aKSGqP70Dxn4Qrpxu%2Bewl%2F42mGUSMi3AL0fdJXEJSCu0K0%2Bb9ZNWhhAMfIDMi2RZy2h9h4J%2FFPzFR6hcQ4qwjKh2dT6AciNocNHc6L40KJTij70f7PBaUBAuTxUAug6H2u%2BntNF79APo0BEQA7GcO8Hpso3NPjCZy26zl7zNkFzAa1jlBUsXISaGVQLY5aymjXHyg96%2F%2BNjuOZybnogxxY2tkQw0NbkvgY6pgGGeYw%2BAtVvrrItYhQ7n1dYPhjJ9vtmW8EKq4Re5iD906jQ89jA0rhL765W%2BOpUk%2BmlRZ%2BxME%2Fj05RBlpUBpURsKyT3lj6qgTwMR8V15kIqL93%2FOH0%2FipRf%2BrRT89NK6B0rCljNFw4BOv2Lq1yZC7jLpHVn6W43DzqfbACXeFdccpBONzxO6YAEmhWxLrqfX3ODSBbIk0P9Qm%2FQ6MxKpFVumHsm0Dlk&X-Amz-Signature=fb23e29983f3132e4b636a8205791525e37a6a904760bc7aa085376d7031d8b4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
