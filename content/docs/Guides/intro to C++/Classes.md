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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2NOKZBR%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T181013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqIGudaLQJ%2BNBOLXvTl%2BrdpCqBdwRn69%2B%2FyEgPZDCK6gIgfu6J0IUfzUoMzxCHka5iDfpZvlYFuwi0M3bZZnG173sqiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPwYZHu965ZvaT%2BC3yrcA2x%2Br3bUCoFKsfDJ8Ee0L1J7lRbuetvHQesnabsdQZ4SwbzH%2FndTVlxbkLx8Th188XTGI0ywYPi%2B1yJGCfMffMRXoEpbpvq7X9xQb%2FKG3LbEhSy6hO5iEc5oLs7h%2FaJSYUAGrgc7elMRyr3dBW4%2F%2BnUaq6sHHncBkLtJfQf0uq%2Fcb22TpbSjq3krhjdnpo8TC5SIKuhgYNwFrGvgwCJhZO3fo00mDNB1G8Ifc3oQ6DjpGcGohimOu19yFfDeAr9pvSSDZTVAEd9mn7m0gC4hSqT0lQY%2BwuG7S%2BLazEnISgRMjpUSmSgsE91j9sXL8J1nOqCNWFltlFqVotKU9yZtdWv2Jlrg0M9KBg2BKakxueXpDc2VnX8fy%2BuqgAm%2FYAgkfhPQNXlsatZk6NJJYeJbGWoar15ZJ5QcYVwIqs0tSWn7nA5OjGWh5WC%2BRtWJIqAhj9Y75saU%2FUT3DqRisw%2FL%2BrqQlRkTlS41VuPReaiwppAPQCHiDy2PLi9NHaDDzTz53gGO8hzNcncj0rpV1z0rlshf448DuZIbcVH2ZPBrgt0MsHkIjwODnpoEe74zAxqWI8yAhyD9%2Bxy3xSgrEsQLAZ1jaLsU0AEu0baq4Q81hiogihljZsNOZhBzbnC3MPWO28IGOqUBJjjQxJ%2B6vU16QPyq0l%2BiPC1hCdu%2FarJfnW21ZwNu%2Bg7PjrXrJdkjLIkVMxydFS612r9jRI4iTh1wjAr%2Bwws05vf%2FltsDN1LoROb%2FQee%2FXIH0sxfoPp4N0%2Bss1BRNxEI3q60cEkrdx0bSM0dhYyr4cgTOcdRlq0twoT90fHBkELrK4Lp0eOhhIppVKkv56aQ8I99WRHSyAXcm3J9Cfk7JWkhRzZ8G&X-Amz-Signature=d014cbf8c5b9a5b2329801cfe2bb4e9a383f706ffbcd5e946706fa693fc7bf9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
