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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVCFB2KR%2F20250805%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250805T170921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIAF51tzbIdxu%2BNRDlEScvF6mOybZ18ph0BO2VIO6j%2BVkAiAzMhiMh%2BQeQnbTFlufnvzHpn48N8Q6vk6gqOGDkqSwISr%2FAwhhEAAaDDYzNzQyMzE4MzgwNSIMF4IZuEN%2Bl7aDzGafKtwDrtKQDS02bi0MIZK2eGSVdgosVNrHRLRyqIW6JoeFJLDyatRMRHEsrhkGODm%2Fq43iI2ZRrnlkOzez0TWbrD%2FC8fa%2BKpHqJNWkp%2BsdWjG8BG1Qn1oI0MCK8HhVVsG1uBMwL8FsVTFm%2FduqjTem3V%2F5dhjJwG%2BdeqLLIzsmN3WOBwI4tmea1PAiAcG7oJri65n1MVgcam%2FHbMPsZeQ0dL8iH8P4n1kdRKmzPlNdOqowIFNMXiJURZrXNquoa80FVVQmzMEFS5VNKDDhwHZ2n1amRUBwUJiP5elq%2BABVzxihKxdCuYi6Qu3QUDwVgpmItWCz%2FL6GxObSKaoIefWXX7Din16KfPvWqakK3UR0WVg5XtRPynm6yHby64X5U2khHzs3SyadJ1g31Uh7slsXN%2BzAbCbskwH5llELFywssw3U1F51m0wbTh0L2NKj%2FsTCp34iFDu92huwv7fcTmRuLILXMHvddmvbSrLzhDsFwCqWyAPMJjqVvYGwqMBIiF%2BNt83oapMyj%2FsDZnt5xM0BUwQQIouDy6ez27MZLCitIHHKvbJEBcNm3kOEH8SzjPgGS4fF6M77n7CJx657jClnR%2FoU7mAkLyn%2F59NAEngYNdwXRYvzuJ7Fq64qHeslbD8wwMzIxAY6pgEzh71xb79bvUOb1fWFQE3AU1%2BV%2BB%2Bnzu4iWkWne0k2J577wgT1zwKWY8wNCPTa%2BYJXpNoggKhECtQraTXtZJ9uZDKDXmnSz7fPOELcEBjTTH6gYt4pDxAVzfJ2FlBKvnB77aGJ7%2F7b99mlql8tZ46mg%2BnNmN56zbOcja9H474bQ6tsSIMjCKkX5tNKTpRrSSP%2FhztQVhULRLsqIKu4KFU8Oe6%2BA6TU&X-Amz-Signature=dcd2ea7a1157be7bd8f5d8419a88febce92d28c46599cdb986ac73b7891fc36f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
