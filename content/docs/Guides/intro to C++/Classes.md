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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TG5JONI7%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T160954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJIMEYCIQDRl%2F3A7zi7z1L%2BxyBKyrjUl1pEXS3L146Hb2aaFaQ2NAIhAPFrknqBv3NtjnljcthSlPEUeIo9tzQCb0kH23p4z75tKogECPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytYvWZ4UMvpbVcnHcq3AOkVoTMzsb%2BZY1neAxr6jszbyxFlQHW%2BjkjptYA%2FOef0YbauPFVJ%2BoXSi%2FeCoXh1ZGoLa48qL7DNi2OkoWZyw7E28YGefKrI4QGSOm%2FmobgUwSo1YR7FLQMPH9rdgJglUPEDVEG9XYQsmZhIgKbWiYCDlTwoSR010o6QoyP2tJjWWMLPJ7ApgB8HLcxSxrL5f%2BDYineBaWrGwjvwBgtu05zFJf9nJAxQIx7G9PJ%2Bq%2FscX1l3P1Hrwv48jp5wUd7%2BJv0mP%2FmEvP9qrXQuJXMQ7JA9jKHH8R4HBDoI2GAXBu4E0F7aIrvw3UiWb4h3xHvXqykCCemDM7QhnKFPRc4NlHeS0Y8lo5Tkf%2FqfTgAG1izZ%2BPHyN%2FgFNX%2BhzqofODqTKjn7%2Bu1AUp8v%2FAMQOhoB5%2Bd%2FrYCgBLghn0s4sP22kiTf1dhEmvqDA5OsFgf9K7DOtuX%2B96JK4xpQ1Ak09wfssSn2McgjK2CeqEMWTO5tqbM8oAvR5sKxUWPZ2tX9Kkh%2FOhZ9qfTZS0AaUhO%2B8Urg23Xt5kPimN3gwSRgkHXl8ZHceooAg%2FVsjDySf0kwnvfCcrVmplldcTnha5ukFUvxbDD4s%2FU4za2VO1Kt2oKCP0wMQN3q1RLuJ669SoNkDC%2Bp8LBBjqkAT6bls%2B4QB0M1Hp%2BLA%2BNnVBStQRBmkmW55Nk3SxZ0zK2KzYtoekH5QnMrv9GSfzEACWwrT3Ygbwh7F1VTKL8E0rGPpwuprFxYjwEWSivdYOrlWC%2BBV7OqBNd86nqDO17Az4JtUsomfzEmX%2FySwXgEk62t0nSDS47OJYVuL136RVfCgmjlMkyAvOe9DxCiMm3lW3gS8GNTIh3GRkdIlFKbxAjmqzc&X-Amz-Signature=ee84dfc539f1c79f671b362952b9e58120e7d0a16c4e6d5e9561fdd62529a262&X-Amz-SignedHeaders=host&x-id=GetObject)

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
