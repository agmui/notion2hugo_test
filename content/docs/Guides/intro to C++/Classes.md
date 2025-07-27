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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZQUPQ6OB%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T140750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEoaCXVzLXdlc3QtMiJGMEQCIFVOYrtOh1spBJc86lmOICBUpnlYGouq2Phwv%2FZaxPeOAiBZnAXNOZ4URn7vbyRjfneN%2FuO6Phtos3y%2Fs3%2BTJleICCr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM%2BRv2Ck4x8qlt0HBtKtwDWConP5irVThiDCcpGeHMw%2BbPjV3HTewEjrO5UwnZE%2F6%2Ft2AA1d%2FP1fqiQWcCWouGZacsSNOx%2Bzy8Pcp7Hnzdc9%2F1BD9CzvApEkJMc0CrmqV6XAyYH6RQoCTwgH%2F0uNwGDBtFx42lwS11V43UJ%2BB66%2FLV2SeAljqGeCM%2FYrLyg51jSrMYl9clO0TbKG5gSCToxSsZ%2Fg7zE3UhbqzwroLs8Yxcn%2Fya3I4bcPgVGrZf5d%2BIymnPzTaSxESGLQe%2FG1qnLG5%2FalK1caVVgXlhIfq1nqDmHzzZEvnlqAagHpdqk5Qp4SQ8wjGxHFXJk9UZtkZkkeR%2BWA7FDB4InPKWgbFWLe%2BGKaVXDzY4nrHHIVNI2o%2FJM2Zu%2FNChAMa5qtTeK3e5eLVFzLHqrisGE1RyfHSFR10i8dbZ8AS%2Bjiqzn4Mch8adsfFiUbtQl6VGrlcQFkPgNQ5lRIZ9%2FBYtmvBCtIttme7OBJ6TsBOXlcR6hrBEco139pR5pndlamCTr32K%2B%2Fvu77Lc58lVQQCLyTNJjBq81KgQXYaL4LV%2FbLwAPkHhfGGtsR0vRilng4WobKt8s5WO6IWuFgkpKVRWlLnS4iVh334EecN6Dk5pzsN8rByR3tF%2BlZx5cb904pwtN2owzN6XxAY6pgEcfv%2BmN9rSvcXKAqvQo%2FUqR2DB3gbfF338RKdfIICgHRZuu%2B82j3%2FmwyqRCYZ5YITv%2Ff0zrSEcFZAgOWuH0qvZkAzTuUVRtnyQIyy%2FJow64WIUH08C%2BaTqrg7N%2FIeM5mFyWiiY%2FzgjyAbyQELjlJKzJmM9W4j3qCrCfmWPte7BObAzwiu67zC5T3WLOyylzrV1ymzgUxFlIUzgnsDBRwEE3ovXV6Ea&X-Amz-Signature=248a7ee3615c5b5320608abe68ab45607efeef2d22cab8b5e89752bada547685&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
