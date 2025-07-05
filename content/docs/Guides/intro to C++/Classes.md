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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XNLTBYS%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T050840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJIMEYCIQDpad1l0r02jGWX%2BznbNpFqnp%2FWURUpUNtzmAhnqq%2ByiwIhALgHyy8pgv30Q0Hao8zFbspF9DjuskNRQvLsbAIEqkCCKv8DCDsQABoMNjM3NDIzMTgzODA1IgyMvBR8mLaECAYbTLUq3APoB8LBBahNw0KGDEftrWo%2Fs7wKt%2FeoQEJpII97LaFdmBTMVZCl5t9bB9AQjnk4QCjybUg22Agc6UmdKEEVFPbNdIe3R0N%2BrRTmnCaQG%2FEcr3lK2B%2FpRO2Y2jQbTwSG6eZrmA02MRaJ8x8sRvUMO3Pa0peUTUODcV9lOrnl%2B2tpYpYtkwfDlDFjh7Bm4GmSrxg5YvXomwGf0BmopxpWUXIEPLLAMHPy4NzotR2DCMENE428iR5rv0MBD7UoBQbraWtjyfuhM8N0x3GQtKQR3pHJ4Kyapk3TCf8L%2Bf3nXpXXiiNetY5k1eLAp3lzAbfvwR8gKiq9DgUwVhZgVXGAUtZcei9GCWfN8dEfLZnlghKYluLEsecIJnJ9GeSVlSOVR1%2FsYVrHPx37PFe44zebdnU0D7KW7BKK0DIW8r2cxRXVB2FR94a6doCZt%2FGgYGKT%2Bt%2BkNtXXkLv2QkhzOAOv9DE%2FwVBsZVG0ZKo55UxFvV9%2B8JBaRF0cQ2bqaVpzNN%2FeNrb0ZftyacgxJW54Ew1cca9rgDcl2foTLkbcKP1QdHDOcWA%2B%2Bq2mrhKOQ5wJAllvsazwmbyOf3tNHra09k9%2BWqq63VAvXGPgCjtvWdqsJnWva0EF1hQyF6iT9CmzGDCiiaLDBjqkATjpU8A2W3FFyGIncr3LpOxjmxD66dgcHfnVIsus9P09qBZjxSbIgYRMEqC15vPGSw0D7q0z6A4bpkB5X727Y8piv0KNNoIq3LuDGPQybjuLyOna9Te5KuLtUvHkYpc1Ux6Ddgl5rERXQJslsp0BROFkdpiEpexI81HPlF%2By%2BgdgHtl0n4qHPM353c%2FntpoYisER4A8Ij3VQilN32riDQ8hLWYw9&X-Amz-Signature=88c3f2105ca3b9b6fd0eb8d8000bb811fe086a5a398ea88707b83e029593a536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
