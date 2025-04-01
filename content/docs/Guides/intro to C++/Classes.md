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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SH3O3U2M%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T181015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIDy%2FqaceC4NO01o24BrjhehPbAEqlHyLIB35V9Q9T%2BgXAiEAsUs5smzwu0l8djRehWxFHyMiFixC%2BY%2BW4%2B3zl6j9GlcqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDPuRoOIn8NzRyVUuyrcA%2FPrvAVYWI9sPd78na%2Fj7ollIT9y5N33o7dEqDWgxUZQVpSOYKitoRt%2BoAuOremz6O%2F32ujngeu5ezw0RXuv6P3HZPWprVDGsFN396nxmoSGoPFhdfTR831bNMjt7NnuB4vTZJF2bf3ieDxVshajER%2FMG3beQDLa54MnykkaaXhmWw4cmcdtDN7y7%2BrbRJglAn3YEAb5%2Bf1QXvucgG8maF3cYdD0V9A%2BDobZ5P6KRH7cMJGxSkur9QT%2BVXhropErDZjNvcXN71b%2FwgWbA%2BxlEbqOyTZjQehyjoZEq7oL1qCgBL1s6kC7tH5kRMw%2Bd9sMeP5r0eJNbqVRWpsF1BCYfISquR2relERgGbtHOy%2BrwHytPugk6bId1xz9RdzyLn4NUF1MgDHihRusAJo0aYt6LLXvbycX9L2AOGmDqOQYHXpQRS7dj5fWCVx8D7MSJJf%2BIRLCsufT195VoKhpELLb0i%2FC0V72MXPtGvW%2F4Xo6cWXVHUAC7gzjRiQ9D6H8%2FMHlCrtUPhM284jiZ21PLdpI0%2FezkONm6bDqIGXH%2BZS42uSIB%2BdKvCRMEUPJ30%2BYkqP2C91mgFX97a9WozhkNbWIeYX%2Bvb%2FRVT3lr1IRwrRe9V5TdbNSt0GXfRoZi9MMLDXsL8GOqUBoY99OzI%2FuwvJUOCie5Awrx0tPZUPOxp8SMv7SxHE2aTIvJ8f%2F2TezfQh75%2FfEy9lDiHzn7tOSN%2BgC1PQGDi92f2T60BseNLhN7MSKbKvUY0ok7arDSZzj%2Bc870UXXrj41waczVmJxRqORgDCfLSibycnooeLB15c72XUZVrT8HIhOIE6T1KcJV4amuBPOKNku3Lt1wrStpHcMhbfgVqrVuztcoyn&X-Amz-Signature=f7b3930899dd85c3b7d227d17150daeff5940992885717e37b89e4e41a625741&X-Amz-SignedHeaders=host&x-id=GetObject)

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
