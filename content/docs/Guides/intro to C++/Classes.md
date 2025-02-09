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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ZEPVUX%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150139Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDgm16g8dNDQMQm6OGq%2BMlnzVxx1nDYAIwa5lvkPwBlgIgPP1uJeahi3oNJm62pRcVMLcHYtbTa%2BsyRNvWRgF8N%2FAqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNlo5fLDC9LyxTol0SrcA%2BQ%2FVVh0KFzMPlWuhpS6KosLTHxzc72PPaEwDeu6m1%2FO9Tp%2Bawxw%2FdN%2F23zxVCqdzbhLgm%2FR6VTQS0E2fh8KempgfngPy5qTPox7VA93cTKkXiMlVqKGlSyAUL1LDyEsTeJbvT%2FIu8XFfjp67LTjVWqoWzBubRYq90%2FL7IJSPkrKxONX8idNimQPSsUK%2FNPwio%2FpIvzRt4%2BoqEDW7LdqtHh99NfZ1qcKM3HSrt%2FCmgSxZYKHtbzfUrPQtG1Zz3UV35pIzHdNMNABPQ%2F%2FivuCQCoQXApasr2CrRRE8uuBKGoJJi%2B6ITugVRtmSy3bK%2FU5D%2BBq4lqnJ57zu5ZmfNWVyQ%2BW139%2BwokJMyq2%2F3Ef97NwPZyWcSObB59jVhiRK5ttF3GI7iGp9J4b4l8ReCFfuHnVBUH%2FITPrVfken9iXOCYvXrI0jyqpHa6oA7767wY3%2B4JcqqPm7VA8ljPQlzDLjcikUrmSRa12RFdvDxwRi%2BZad4%2BLIhrtwY%2Bukyxk5F0SLD4KwjCHeYrnXP7qQCklnh7b8gvWA1%2Fs0cuvT5MMxTFcZYwqu73wZzXC4KZsL56J5ujea%2FtewGJDUxNOOljMQ2bnjdJknRsZRJH7OmmQ6Z8y8DAuNx%2BLTgIoPhgjMOnkob0GOqUBPidB5maX%2Fdf10RQxtZXnk7UVCKrArIDcOR78eufqWS2Vf5Fr%2Bw8%2BV2svlSH44D0iz5VLeAkBMx2iVODcI%2BKF1WgHP4PfpXeYZNefgizt0ND6fGXD%2B4df54jmBEHvAl7uZE70V4TL8P%2B%2FlqRHsMmJngF8PO6k%2FdH7K7LpFHEc8MvYJb7Eunqzz2MKvWTnPjOeIeoKZwwY3ckOOoWU3NmWkDMbBVRG&X-Amz-Signature=192450cfe28ea9835083ad9c61ae800640f478e7e75564e369a765558972b0ec&X-Amz-SignedHeaders=host&x-id=GetObject)

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
