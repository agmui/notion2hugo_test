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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNPKNA4W%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJIMEYCIQDUCJ4tB8qkQuJtXCpXMIlbELyi77Tyo7XMdCcIbVnKLAIhAKz5CgZQItF8GP6s3KmFegbWUYyr1lsDz0ZsxE7e9bYNKogECK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz8hMtfX3uiOQaSd%2BEq3APo8xxCckoPMPXdLpUWcdiE0RjorDdhzEKpdnViWix%2F0nuoyVSmTqRjUySS5jeK%2F%2BCn4yXzArwkWMBdUwyGMqTEZVsbTWcqMdguwrLJtgcs3ZyoPpGOZg86Geou7xxkU6VbVfvh%2BPaj4vApiyadj7xHbOBqDT2paQ%2FdqXnr9HbxmuQL7mSepUvMKsX2ITgndezu9V5XdhtV7u03cSA4WlposyIHrE7Thlm4ynoESkyQyp9N9vhBvIlQbE%2FTQFahsLXlBRfMo6ZtcKlChC4qrKMAsrSlOl8uBz5VN%2BmGyew5EaO06rUj%2BleST6lIGhbOAzoyTo52H5mMRFkzQ89tyDM2Hkotlkegze8mqfrz76ll%2BQYBGeWqBeU0eSkv4oz1XHkQ83OsOk%2F3IEz0a%2BRgFZGK%2FCygmvfUi4jwRc1HFn8Majx3yswGee%2F3RPlOPD9ryj4HS333xRGVP2reowK2Vjqwx%2BoiYfXsPrn%2FdC2%2Bo0F%2BUpB2ucGW0F70MJDDqmgqAb9%2FIx1%2B0YGp9IOXnLe16SCWANjnmUb%2BXYeqK3svfSqU1bAOT9vWIIVgryFaCZ15DEPP9T0Or8U9x4TSsGEmBLEmeW8lvDP58eoP%2F7ax00RVd4yH9mwoD9rqVUsf%2BjDDx42%2BBjqkAa2zy7qa2NQN5w327mLt0fvAnF4kOKDZkKjGDHqSOl4IqAvYPAbDRV8ShsljzAfsgmq0f%2F4kMH1XiCcVEjdap%2BnaNc6Rh1Mw8uXmflQ1sEUFusS96vDAJH6qVw1lqQDhKlqF8FF53ROuyTYtUEpdGM3jEYLTooram%2FI6XCoZxtVmXCdmlvJoxb8iFIyhcIs3gkMDbGlzy4CbbRg%2B5LFFQaTfjmdh&X-Amz-Signature=c40e87bc3c2432af2da3d23c35b0d4ab2afcf25b355806491cd09f073ba8c255&X-Amz-SignedHeaders=host&x-id=GetObject)

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
