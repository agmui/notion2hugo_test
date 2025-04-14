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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OAAAKEC%2F20250414%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250414T140837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDD1vmbWUlJf9cEZqMat5%2BAIqdKFkT7ptdYHCGNtPVKrQIhAKhjshhak%2Bp17qPFQp6xTheBdnjScI8U8J%2BO8a4X6ma8Kv8DCBcQABoMNjM3NDIzMTgzODA1IgwVbP4k%2BpLyLuMmM1Yq3APFSELIV%2BCNX1scfzSFo5zNNo65DPHiipmZVhhF0NuFzuQJK3T1bR5ifzaITqQB%2BcfxhANEFx3LyJwDLHfGIqOoXFWDAID%2Fzv0%2BjYfLtcx2PCxi44M%2Fd%2FYzi7zgioY7HF7SfPr%2B9rGMjvi1ZG0pqKrt8NjDYYI1z%2FF0RTbIrJHvEwq7gRpiktWmiusT6wb2Hvw%2FWl56uu91%2FbrHLXVMi%2FFA5%2Bp3XnJTXRbvVX3v02IKGSFHp%2Fo33DCorLfBeIX2LgpZ1GPEvXK2Oe8nDiuO4M4iwTrCEaOc964d2mgqH%2BNi8mQtx40AjWsfWi6Bp%2FkV%2FzixHT5MMZH3X3n6dd76tiRkBZikHaigxBhoO%2BRMhSVvhzaeYFsv2SWImo78WPF1BrC9CE5HLAm2R6W%2BgN%2BoE9a4crEEPs2CEl14pi3uVxvxPx3eWklz9pb5HIVByBhKkbOdW5m9E5W13hqf818kyr0I5rf5Y05d4IhmcJEA9PLZxDGPs%2F%2BEkRZVfVJeqzMSs1qemOYu6EC6OHWXTpJ0oDbE2MBV12JBpzrq7UStZfqz8Tw7hyxscuDy5z0tVReTRcr0axYcHQYlR8F9Ff6armAkxnSzTCw5snGj88eBIp%2ByWMkd4obW51aRST%2BUtDCeqPS%2FBjqkAWfV3OBOMXeeg9JeWw3v%2B42met1TydICa%2BJPs1iU0LFuMX7HoVgLwJD7xT%2BUyYHygqcZnE4hUIBJ2hKRMBzW0oA1RixZfkSZ1SSSwnR63Vm0IM68fBUgPKoRrDwhWJMoo%2F8tSt5DIIXaaxOeXKlROrrV%2B6DlMKTFrq1%2FToe%2FF9ovTSMO5ZiSAxT3W55JOu%2BJ05kp0SbrZuZMBP7K08RJY8NpESYZ&X-Amz-Signature=ced16906a111ed07aa211d7b696e9c9871b8164c8b64d67beb4635cf84facd35&X-Amz-SignedHeaders=host&x-id=GetObject)

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
