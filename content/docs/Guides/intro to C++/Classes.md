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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6ATNN4P%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T220757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCICmeuoDREeOQBDHo%2BeMVQGrj4GO6eCc9fN4re9VF65PyAiEA5ecwcprBBjidtgQJAQZ%2BrfmMUc7mlhW4Boplonz6DOYqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEdc4MPKrn9G3CS7CyrcA4uefj1IwVvIBBM%2FDnxrq2onPUNGnPb2D4jMBgnMwX6geOYDg581gEHIX6GKeUE4gYSLcD%2BvxDhZ9lhjDvUKk8GzDj%2FEZys1Psk%2B5hw%2FIZ4eDYPDMPB6gvEKp44WvYDR6Ih0mGYS0DKXPe7asjvs5jkEYGGugEvrF4PjuiaICKiX8ix1zeHSxfmDtDmQRpFSGiwWBJw9OK%2B9a3tQhciMjU9SHQpdLiJ0n9SVnaOo0EyDgcjg9CJ4QROTu5a%2BhCbyeggxbFzktGZW7gRyFHLoqgtVkAfuWtBKwpWRuCuwAVFqQPrZPbW0vE%2B4%2BMt6R2QDjqCl%2BSD47sQJi21%2B32jU8L%2BMuv%2F%2FgmGWm7Q%2FtNFnZ18m8vc0TgD%2FBgNiowzxW86UiMJUnacnrW%2F5XPozHq%2BAP54kK6%2FOmXk4lLduJFVE0Vv2Gl74LV9sdByhdHNFI%2BjtdSiOevdPxzqvJ2URV63iXWX5qXdYNcGdTYklTY52Xs22ep94PANMhosBfWdZAUdV6qahXqyceEvL%2B3wMU3zLbqa2d5eCDqYStG9YI3V5SKckUUamjlL6U4MyPO0DMMW5xBwRaU6AOupF%2FOM1dLTUhvpTnsCU7eV9VSFWzZujkNEWkfaaZ2iL1zzEM8odMNSosb8GOqUBgdnfVtVH9UTITvRBpXNsFNlAWEssK9o5C60Vi7KJxxnojKLQ6StHI0giablVPa%2B889MN2MSNiLX81dVc7N2tNNHfumpis7obYXrcwCJlvleJX7MKJa4mhAj7H2G0LHXvOThnPGVLCjqyQO6IUPjRVo1qDhJMddOLagnAwXFBMVOwM%2Fj25Dcm7NNcGjW2wUcYcfxbmCCICxAWKnlsHsCs1joKw1ne&X-Amz-Signature=32178abca2dbf9af005b0b0b69a925fec1304a881c619ee219fbd145c5f26a4c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
