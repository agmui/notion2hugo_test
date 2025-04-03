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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STQBXPKZ%2F20250403%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250403T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDTE4Q66hzd76xwEBZIxgtt6xcAEuPEHsd4YTP%2Fofj%2FKgIhANvrsHZ3pvwuEKwgnvpIkxdaFo6aYCLTo%2F5CGDRpzc26KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXWAZzv%2FTLwJ5zj5Yq3AO81mEn67zJuLq8pr2vQQXHuXl%2FP9D4e6Jzu0kJOHieBXjjpr%2BRibcHeui1mM%2BRpCQlXteahrfew6Q6f8LtJyjpfDnlop1GgslUoIWQR%2F2LXeqKZzwu7%2F50lKaPbr%2Fb2qo80ioVNAzht3KkvNgx80yA61u4tQh%2FpaLTYsqHFMVq%2FcCi6%2FsZ9hdSICXYf%2BZiZcw%2BbCTP76lJTgbBkFxa%2Br%2BxxaxZutHLNkjQYd66pN05ORLFGg%2FwNgm5TtXeICq4wxClQevMtUTn%2FOrf%2FfOnPLV789vzhI4MWO%2FqKgbGtUTdLC1NruwLxUYzfbLepRAY%2BUpnlARjHz6sUB2NqPfB7QzgBTS7Wmn%2BRNZOPG92q1LYXaYKisfJ%2BFOIUTBKjuf54P%2BJpQBgZ9MOau2WHZRKXnSC4Dg6tK1fJMmZXMXc97PtWuGDroB8bIbXM6Btg20i5FBdk41b%2Fl%2F1IMIGruAojeCbLqKuI47X34FqkUUkh8Z9M4LU1Vo4jGhZw1HBOLmcjC%2Fo6BAIDvYnTPEJfElC9sU8rGnbMLl3OA6nfJEV7K5i5%2FLYTdzhaOjn1yidnzmTPbG%2F4UosPzvw9ghWafv2fdmaezrPEj0w%2FOK11dUCVo8InJ0OwPuCjfZ0frj27TD0rbi%2FBjqkAZXePyQ5N0vt8IuypoGUmQdQtzHUIsdkfS3yZOMW0wvCe4NJQFbois13h7WWqLXD9qxflHKaJWbp6t5oEJPeLupivbkoeeqrbM%2BelJUyzVSLjQ83Jmuo1B86Xm%2FBR8%2BB2glixt0Lj%2BwhhsIw02oeubKIAj6f8202PMTmnTWhubSLAztkeW9ZUVm1ehI6cL95XsBg8dNeLfK5UPuHaffhJFeMImkk&X-Amz-Signature=59788a7a166645bb5ffc456ac53d2f7806a194ec74f4341c07244e543288ff7b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
