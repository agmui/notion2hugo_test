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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUZYQKC7%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIQCqUVNCrlE2foC%2BVyRQv3buzxkeMS2yuALE9wiWvZrvOwIga8SOb56ijsNcE1uQd7OWNEDAf8tyMKvZRnI7VlunEtkqiAQI5v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIk1naXvFCfnrgq23yrcAyTYW31u69HxLiNR1QjsR0uHr93G5D1g3f6bGNfxF76NhVY1GEBvtnEjqh9xJ2Wpr%2F9EJl0eq8H7FXp6VgTDtJ8RXFQ3NmGNjExKXyMXs%2FhQ640cytkfmQnHbAn4KiAiWX3yVN%2FfSia8uAxFT5fGeo%2F%2FHF5xz8yx0VC%2F2wCXysliC1nm7c9mVvvPcjJlWgyMM%2FJNwzrpAqYpvOaksELi4czbMGJGIXp9AtjLdHmLmFtUaFsxqBY12yUy6RddsQEnKpwhHXLiNvyvElTUdX6TNPaSNFuFFf4Z3qEqkB6Zkorp6arMk8YZHkRxwecX3Fomm4NYVKId1%2F27wyPuPB6n9WsbEHlSQGAeyP9o%2BXFU6a8ecMj%2FaCYNRFCGLaXY6%2Bm5d4m7dzPseop5Muxt3C2enMnoT6%2B1BQ40xgdK4fahkjaq6mCBI7rabVsgNcwqN5S53HMqslo1GubUaD12Slm2CIzVQji%2FG%2FRhDUdvX9qun6YHFSZ%2BRyWgtjhpJchRdL056eaWs3EDor63mWGYqISfZLUubAd1bN5ljg%2BZNNsDp9crCM%2BiYw%2FVd5lBmGaWWIBXaX0%2FsSF2EyFN1CKDsBaxZJxVroM7%2BfSXu6VGzCeoUZ6gLOBY%2FQvKm1FmcWk0MO7X9MEGOqUBzly0ymS1r%2BD8ClxSLh43HznIQrAyWU92s4YdNa3XI%2FhTlTJYUg8oW67%2Bq028oLOI4O%2BtpKWt1aiYpaOD1EqoUnmB%2FwJB2CirWYqrwsu9RQz1EmXhjlsQqBh%2Fx%2BOBO5xawU%2B6mrbqQ1OcMfIJjX9topfEJeHQZEG9pM1qGWnwHryZwyVs%2B3MekBmitVJIjdzIEXdZ%2BkLbeDQqfT%2F5VO4KiWhbAsfo&X-Amz-Signature=213232007f2bb31565db8d76f46817d824762d24188b93ee96752aa589fd9d4e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
