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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTW7TMM3%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T190244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIAIbc%2FKZVbfh2%2BaEAmSGhBC9mz1MUnZvlvUqmyOSXKKuAiB0eBGOXBAm9QNiTotgAe5pB6pXh4xm44AHATHafGEdkCr%2FAwgzEAAaDDYzNzQyMzE4MzgwNSIMZ4K7rKEej%2FSjfyCqKtwDfKzx7KhDhJ5pJZD5nwCKS%2BfgiExzFVJuIIC33%2F2ddIt9%2FtGBMX1zk0wcv7oVM%2Br9CscescmfABmiRXkyVDt6Mvtyoe2jcKHJzA2296k%2FZSvIHKT9nL2sL9FWtpJv5OtP631qaxaIdZRiLuGK04Bt%2B4suoU11%2FiTr6Qp6uYct51Iss6SDNEgMvtNyjc8OE5xNZo2jBVIOBLGEWvMLksW%2Fcg%2BkRwlx6R5QxE3P9nomlBUqXryOO14nIDVBnF%2BsLXyx9L2zkvhwDbBmj6qC4qvl%2FjA0WEQQWLgJLVOCWzY27t28n7Ju1mHv5A5VziXqlqM1YVj5ggGWaanWJwFu2PkcETH5RjeIYrrEo82lCuBBjbPe%2B%2B1aA4LmzZ6pXPE5BTUR%2BiMcgXlkjiTlW%2FgT2hqBGS1pnOkiuXhmaXAwHnHlUdPsXVEjmZzRNFBYlvdfUOybEoI%2B75gHIsLqUmou6HXAt8SMfdroo4X1q9G%2FqPvcMsaZKqtbaxQbhkXrH68gFZVfYv1SioU%2FYUprp%2FyODokH0zy4cR3qjWxKw32TEGMMa%2Betgz9pxpypC5p0t2sKXROkeValO31xux%2B2gJa%2FLknT9b2pRggRpUqMGlGin%2BqrrvofTx%2F1yVyGX%2FjsOIswwfq2wgY6pgFTiNJ%2Fzd4%2Bodo%2FFrsIkykSXwqJId%2BnmXgBBZRP05Vkd6lM0XIgA89soYjDf8hkvE5w8o%2BndkIYz0Sexw%2FMYYZjpmqhwDqu5EvUHcVxG0hwFZ8mdAJ9v32mDeicookJSQJnJLcv7C1oqGbY6YcNG962711M7vKyZael1lEHeTJOeLvczJK1UOROM8Uhp88SNIcL4xjZ8VNzlRPqbRYnSy1FwdxL4DVV&X-Amz-Signature=3160bc7d41b777b918659e4f1737d840744942718843d24344d7ef8595e399e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
