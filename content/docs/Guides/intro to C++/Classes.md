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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBZXY4E4%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T100729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE9NeoFgQQ6EkbHGtVwbGr%2FVNdfiBaZPgKn2tF1wBaZ3AiEAhlrm7Y5q0107eTs3O5%2FpqjjCFSeDNmshsQvF8P9LHpsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDONtHSEM2%2BwIHUpGgSrcAwMYqAmM2JcYOEu31P7vTl3FrTERDVTd1KwL%2B3ulw1ypy8TV113SnFckyLoXaEoMitZfMNobC8mzyy0Lg45qEYL28yJp2SoEXNSDcWlqrOFoiPaFGJlIsuuefKNPNvLosIFkFi6VNytmEBwXQKFEjQjl3XzuiSX0drBGtji45G7jOTeRuCPYBXefqlITY7IrD71zMTWCfYBU41JMuua3XUI9TLeLBT3XkgQdHwTmUComqrLXi%2BvtwwY1jXJtfVBT5JlGxuoqKX8mexR%2Bfqf%2Ba9eCBp%2BMMa706mno0JZfq0xrYdPn%2BsVz%2FSwPnoUXJgOoCBiZYZN6vIvzvHu78ROE%2BT%2B2d1ureIAmFRjNIOTBWsBaCIceYQf6Qr81A3YzVIa5%2B8gVSEqF8cIJQd0R%2BvK8zRR2qpbALpATCdF0Am%2BXwagm87qo5YdDf1i%2Fkddx0NbB9kk8xF4yJlOmyCa6ecU%2BRSHZOrF8oaEfdSeLBO6FdRkQ3qBFoiQwnHUI6HhsmC0rOQYxBLJh2wDnfGEmywmd%2BhM0NG7l6M6nEbmNXYhdmn38K0AugurD0GR%2Fa%2FpxhV9y6zoKORVZ2AVBaOc2NcafbnPZX1cM8PI1wRUzz9aKhhzUp5qco4SfJKcQ5WkjML%2F8jMAGOqUBI%2F53al5gnnBSNOjKeJEk0y%2Ba4Ineh5tf0SodTjrki9t7MDmsw%2FtmqWzRfcWXILYFSv4PrgBX7bR165zRvcG6VS9DvnujwaCEITGSdPl0SNavGbOSe6WFRHAHQ9HOEA9RdiLU7fHXnycarmlx%2Ba7VeKEhIHSQt0TuQ7AikD%2F4pZtBHnJKiOrhMrhXjvzS1CPwq8KdmDM0imIEZWQa41ibCcvQk%2BAa&X-Amz-Signature=a853b6204fd3d0f04d90eaefaea5b428f2fa9c58ab89311b66da548b27e15b6b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
