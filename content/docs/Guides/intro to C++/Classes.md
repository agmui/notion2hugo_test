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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQSBIIU5%2F20250503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250503T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIGalZQh1zVcar9A0rme8hZO4yn7Wer785HrjuA2w1TXFAiEA6kFqBXxu%2BUnntTnS0XTGzay%2BiTbtVxe%2FUB3WD0wKJE0qiAQI%2BP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF71wBpfs%2FbTCVi5VSrcA8MwBpHBkDL8dIjT7aZ0RBwrjo3rePhw6mKMTAvHfJbw8hYB%2F%2FhE23xqQuifZcRDlnvw%2BZagOkQkzga01rPD%2FJp%2BJFKLzXgDYbNkRtG%2F%2BCWBIDAfZ2oSaUl1cG30%2FBckl3xrNcDKAtpifwd9tJmPzhhkpI6PC33B10mIiHsxULg%2B1AHJfYwiQq5lrTgQRKzHTGhzKnqRdBzsUXeKyUYbmw6aNsWUeSgOfHVleGv0Jf6E%2F6oOtqwv4aE9WgH9fGlzKxcWKH9y1UNC4I7epCgcP3TEKUx9ovum9RbWWaPgtreNq0N47DlPNFmYsnEwKYHCFPCWolyqvqn%2FiGty1EjYn4iG7jDMcl5lVs3FeedYOGEaXTqXZuAzBvSfMttdCJvztoMrWgBpzggp0%2FtrkjWaoqG1PVVLBDhCnnLo8rEDbe9oTOJ2eKrQyH2J5ZewmWp8%2F4dBcNFhqPAdeTQFSgCmYqzgGaLHDhvmm9oyw48jj0HCR6WRLNAQVlUpMjIr4j%2BHpAkLPr3Fqt3ld19Av7vV76dmf7GPCWvspOmwKuLearTTnBNwYSez6dLqdx2G9nKVV36x7M2E93G6fChyt3joQEu3bCR4RGhEOnZVFJPq%2ByNTaFAFLxwPshr8SnAFMKKz2sAGOqUBZAPGNBsOBqpmhCxWsdWuc5rUsq1emmTzgdlgCjZlH0PYLJzHOirqcQGE0nBALQujLQelZepOxZI%2F7mcczatqtALbSUdaecsVSQkHKTqqanckmoPaHnGgs%2FIv2gozZdKkimXaYLqBVwL7rUFtOsZ2GpBuO5vgzeChaahbaC8d%2FMA1YAQisgaDv9zwO4B9fhTromFlJ05nuWylR%2BUe0DKk88W7rR14&X-Amz-Signature=c6db9f3290dbd3fb0437ac1c7a30b1540f30cc536b94c9b1c443327b8c97abfb&X-Amz-SignedHeaders=host&x-id=GetObject)

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
