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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCL2BOOG%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T121400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDhjbWAB5hnWYQuBQVffw6%2BHEJZzm1LBQBnWw5iWQF2qgIhAMKhRMT3jv8Kv4fmEfxLmoNi80pilM97QXJQ9JOqSzNQKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQs4v7ptndXAUyyPEq3APaiDrBBivZcYEERmKAOQ94ZTepM6zz4yl5RGZfEX0Vd54khbZJCwQ68i1%2BobAlRdOb3UodA9GgcZcDFYIC72pkpJ2jqHytL0BK6K3guPKmkAGtt0sJS8JeuXkUwNWu9n7InPO5mcM1EiXPKUGwNAJdqcLS1IRbIEt8IGbS%2BZ45RmO07ZrwMGiUmVE%2FTxDjpuB0QZ9mE%2Fu1SBxLGnQ3DRmpjWeOhCfZUbBGEdb94fpAeuWzUNWAxcP1ORmBQaRdPTPTv%2Bt8kJmmCHWRp2qVkzjYMy4TQTqK76mm2VAQNhs8Ni2ovXFX%2B83IwrkGt6ObCVIRNOwEXmNZbdw3gSlFukfP6ibZ2lIupCh0OUv%2FFgU9wobzi7Kc%2FtI%2F7hbhJBXn%2Bu0ObKa8IUJu9tbmrCWx51B4wqorJf%2BMNGaHpdww8DxOWh7dfC5RGsMk0FdeA3FvhSbGLVvuyVvTISUeDn2a306c6datXgNPUX6YtVJikV%2BlPV30Fv%2F3XjVxQPFpja2RoHUKYnF5d1ap9RduyJnlSDOAApREZescAE8LGBZu6yc2wka1w9SiJxQhI5mevI8qmtZUSiFDFPRy7%2BXQrbUW8IudFqNOF788I1jz9roqzqJ3QJq0Hw2EC82XUuwdUjDp%2Bta9BjqkAZj0NrHHrAMu0uWqZe1UJv6D%2FTXIKOCoMeotv1aS0Fbzrwh7vuhp2q9FDNXFdvPRy1KeFzwskv30HoSjs6%2FZ13%2FDxGes9wgWth8nCsgHVHLcDHChlf%2F91wUa0wflSfrYczDpPfjwAfqXfRnUruJXvXS%2BmuwDFuBc8UXyvC4dN7kDcZWOeFqLEzWcuxkZ79EtWJm7eTIRKk55bzAerYtuufI62m39&X-Amz-Signature=1537f75421d87aba663f9562cb774a37c538dd4c1862129db60f7d42bf30564b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
