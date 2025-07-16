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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOXDOF7N%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCICf7D8Mhi55ByK04j0egQgg%2BAatFkc2M6KBM7Us4JM%2FnAiAbGcEWSzsaM%2FMtVdja2jnRuZFr6E9t6hHO3bEH2SPHiir%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMbiwmwtSnpkbyzWTQKtwDXsWXJEj5%2FsGh9QTBMsYGLHd%2FzwU%2BNsJBb%2FvHpIx%2FMTr83DQeMvLJD8CLwMe%2BY7cP07G%2BS2HL%2FB1OAfLw5Pn2su52YDOQty9FlP0M3WqrhLbTElS6WC1Smclc7u3BJl90dEKr%2FP5Y5tdzjVCDD3OYBnc1%2B%2FGbLls8pRTyNsBwcz9nQ7zTJjtdK4AjPssKXpY2q3heTIaUx5ax3xvBYBdO2qoiUXqT6gI19jal654lyX%2F7eRMtbjenI0XETlURULPhcIlqE6gHOQoanYVrQGPUWodZJ6zgjXFccuFgy7%2B1QVMJvOwcAsTQOanKsVzmmornsESx4wZ0n6%2BcEOCmTVB2xfURNti9%2FSXkYrJAQDerLHUk%2BqmIIBRqCZ7ZTf55nWXXBCecqQAPG91dtr%2F9%2B7novrLoFmvc11MT97%2BT7U6s5tGbXurlWHcUKwqVL80w%2BXrmsSEabhu5kBDX3WMSuuQSH%2F5cgv3l93rZl3jzmdm4mVblRGDy7mnJg47YqyBE%2BMOttOBBrc96p3CEDmNgIvu9Zc98hd60HtVGy%2Bj6ieHfGeubvfrVfpcLAdjmvQpPSEHUfBCYq1%2Fl2CaH7U%2BR5vfu7Xadq0kQcG0bl2%2Bo2NiFpQX4ufjaJZ3vV88uYGMwqJPewwY6pgFzBugeXTBRA%2Bcji6tNrIEQMDJSSwzx8ccGXRQTfG2joz9OteJ1S1RjonDj%2FA4GuxBHpS1f3u1bwl8ELrp2O24hReIv8nAC5omN1Nezu2hSpW3CjvMjtXv2JGgXB0q61I7iCo9kNW0tFOq9AG7DqeJl9mCwYe0WMc5kms2%2BdzB5rJugt7BL4ReqCCzP7SvsX5fn4Ya6NahznS2bma8VhgjMgEi40xDt&X-Amz-Signature=e611832fd50cc91e2ca68e879df0b3834e317eef9e83411d87ced96a1859cfe1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
