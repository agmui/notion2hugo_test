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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y7ZT7QQA%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T140714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIEkRFd4A%2FlpReLSKT2CN7SsSQWU8%2FeDTZf0uyw%2Fu8IdLAiEAyKMhFfCD0Ht8AHQTC0lMdUlvCTouaxYgbZ5m8DsRKuwq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDM%2BLh92taRztDHdWxyrcA%2B5YU%2F%2BGF98xi6nKjNKmE9pzsOjPoLJGmU2aF3p9woWP7OSOi9z%2FxzRQlLGO5p6TkKI%2F7Uf7g0gvHGmMS5FueOJA6q%2Bjhw2YhnMGX2iiDbLqYVK8FLWVEHesAPx6MsJ9g7VN%2BZuoGC258vKtCt0gLY04j4zXTJkY7OBf32Nf4uwZ8CG8HpwhJzeTxTNbgUFmrtAl19lwY241i6uBDRb85XlxvUeAepI0GIyk44KHiChHGHvfi6e%2Bya8r%2F1syUzGg2o7cO2Eg5DKLyXrGQ0gEiYtjnaNflxf9VTtAarziDS4Amy7c26RwX3PCVh6KC4Ctt6aHt4IeKWYWClTkdw1jwqwE83QnVM2%2FsqZFCnGAIrvuk7s08ueV4a2NyJ1fK1OPjzBWtV6RNtYUF81le0xM4KSh8AqpJ6ubcSrlIqIT%2BbYfarqy4s5jH25F47tJbBg7jvONx2ZBUqC2fBMQiOM01D2XMFC6P%2FPzY%2BeduD4HkKQJRhXQNxyT4A5Vj7lAv6zqJU%2FjbMbJS4lmxyuDpe4igJ8mLlhH62zoM8PIjZzTzHAk1AJMu3vMXnZLsGHB2BNZtLF7%2BPgBOR3kmQrRQHBTv5zH%2BfOKqEGYFqWXxsTKzX%2BiMP9KumQ0tjmVqTEsMO%2BeusIGOqUBpYDh%2BA6WJ0uUgbkDUEXm6XqpPNdm4tlFwljOSIa6oX%2FO1CPDAKaxMks4JgNmLsavlgVvHruJ%2FT2nVyKLvUXs6TB14u9JKlQb3aR%2Fsonm%2FpiRMW5xh7K%2F%2Flx0u8u6GpFkCunwChr7hdWcRqsVKViInsQ%2FDyj96IWBKFv4U%2FaR%2Fbk254TsOZcBWU8hEYr5MwAhdu0%2Fi1NZqMD5YMZwHItSUnVR9aIE&X-Amz-Signature=0e9782fcde4ed6e64b4f3dbeb43483e1b5c6fa7a2b02eae221ab72a750aaf579&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
