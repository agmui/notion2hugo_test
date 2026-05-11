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
  <summary>{{< markdownify >}}What is `~Milk()` ?{{< /markdownify >}}</summary>
  
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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666J53KPL4%2F20260511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260511T033433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQC0mi4s5FsqfAobXG%2FEUJWvmLG4gvTiBBxDvNY7J1TozAIgGeu73xGxcGKJFNS85J3S4cpO%2BNxU5%2BXbzeggZ5FiOBsq%2FwMIDBAAGgw2Mzc0MjMxODM4MDUiDIbhraFRuqqeASVDfyrcA9Spcl8RGYHj0%2B6GoFm9bL9IV%2Fo21gxf1zUt8rg%2Fa2RCIQI1Pu9KzZms5V6%2BdE%2Bf3yBe%2BUZ5Yov%2BVfASzPnr2Usn4KJLiWinjQVRzYKU%2F3sprkBvW5AiFtNKVKhPDIL4EIM%2F4LnDq%2Fy7gqKybu3Uv86fNi%2BuzbkXV5doqQtPuH2ND6BhYM%2FbuYlVNTDHkRXXXJNnJk7mS03yklj7VkPuZyfUflCuTLLftVvm%2Fz0L0tTe%2Bi%2Bzfj%2BF5FrYQA9pXoz7b4QWVs2pu0azvUVj96HZOQHTRWOL2xEfPXDCG3xFrrJPZTSZvQiyEqSeKAcBoCd0%2F6pD25SwoEX0voWbMGuentZSU%2F3f1O35RdJ1DPrenfZC%2F9bvIhET3xUtd8o%2BuIIHxlqvpPCRTgX1a9BMEE0wwYkFmV9BLWlEj1LJzVXOMcrnWfqVXjT8z1Au5OINyXYsgHk8YATggZbaX4OUc%2B%2BH8m%2BgXoxL7J%2BylEuPO6Ehfu8%2Fv7HSEyocwM4LHbFgqE2XzKZM%2Fn88cCS4FY4MuR8jIch0PwywpQZeFvlVzpBcWvoBgqLGrf%2B7LfEkbN58vSBRyvknvDm3Rg6q2GiPRj%2FT%2FwucRollV372p78OW1cavDlWM754SPzRza%2FBLgz2MKmDhdAGOqUBBEVBZ4D13ThfSzGtfqvaxn6wkT%2BJmAcWQ93jitHNlgBlf5PGVkRGCZdRI2ql2%2BBSO3nkr1q3K9ZcN7b%2BTwz%2Bwz5upkig3AENBPkZ4hAJ5YpupP2q9974nvw3BtK3TkQVB7kx6%2B7Mu9MN50f6rAdgEFAUtBOW00KFDgNld%2FHYwREjeMMFB4xx9ZIwv4brc0vMz2ELpENn436lnbOzLNMFJpdw%2FHSS&X-Amz-Signature=80e145a8d5bb23411eef7aa417503e7863c71fa15c66c98acd527197f3bacaee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
