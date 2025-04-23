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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SVWBDEMM%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081211Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIAw7GYeETaqzzKUVZT3L%2FKGNCvSW88a6jfFt2SobEGCdAiEA1iZfmZeWHcvU4zMji91vNkNZ9t8T9krX7CbgST0POhsqiAQI6f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC6WvogsgW7ZrcQqbSrcA8Y2DiXEh8SxkwGsaC7GNxMRn%2B6R7HJ%2FMzRHQslessPBFLCM84qaS0fTyYC9BSgdyeFMT0nD6CrIgcE%2FQy9vznaRi13uMGl5czGcKch%2FjZ%2F2D9SESYBSMR1FkoutMi3PRzY7dImaSQDmO0x9Xx7o9jX3xDLKbAmZEIJ61hIzMWx9DITrMJqUImqtqxvVdF1v9tESnYXM3DDnXH98OY4dOxXXqteM73Mi3SgLTVhghZJgq0F5nWgzgbFL1MGNxF5xm%2FDGUPqB3nyEO2vF4GtbvFRy3YIl4P75TiAJhMnJ4A2fvylK9Zdt8nxFAeK%2BqsnriCT5BtBBSdekE%2BbqFgLif%2BbmmenD8x5lYJKLSLe4l73krCtGjjKtF%2FJX3xKh677o3XYTrQ4J985kB9LkDyPM1LXS1MZGpym04uDQumO8GBUruyfk90sGSRMixHzXSErUT91oZ5alHdgOKjM27cJ6JECyyzyUp5nH2QK0Rzb7ay62IbPZkc22OFb1p8Oho3Ybaq6Khp8F5NIOTT9S3p3XX%2BC5QfwvHXjZdua2seeeKdhrtDeKfy1sR5j1ANCMsQHifAryGPf6lCWzn24bNRQypUN1%2B%2B%2FsjfkzaI4yOSv8ddrvd93TN%2FwfOM2p%2Fs2MML%2BrosAGOqUBvbLQaTpyxry%2Fbh8g7Oqcy2JsSNaVklhlH0UMKjyHTMKdfpbyMD%2BaBI8fTHIYae46zLMDwc9rl12IL2Y%2FviLF5BLf1vgFeQQ%2FOeZlQnDd8cMMfz67b%2FPUgqUgK0d75Cz5gH3SnyEDUtE%2BkI99%2FCYEhKqHwXQpz2%2Bm2nOZD44AvTWs51EYFYo1ozWXRsOmO5mmFMdw5cSSfewkPBcKRaGCkQ%2Fjs4N2&X-Amz-Signature=d7de3016b3b3ff815286273621f02bfe7007d073e5f90ab58684998ad8a30a73&X-Amz-SignedHeaders=host&x-id=GetObject)

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
