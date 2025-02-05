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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJVSEFZT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T131453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQCJU1zmYQUaYR%2Fg47AGFK%2FUGGe8DgftLClwksuCsJ2TDAIhALlbB91%2BQW0VBaWlHICQHZZu5n9pHq3HlV2D9uY3DsooKv8DCEQQABoMNjM3NDIzMTgzODA1IgxxmApCBoqIMfZpy%2Bkq3AMA%2FJGr4XJrnw2NsJ8IZX5sZlLRg%2F6Jc5TBnRHCqvbCzKRetLxnHBZUDKhO4DFMcybuOVCaamqVtNyQ03lD0JbvAn33zFEVuwco1PisUgEnCV9zDjpuD%2FlF8tClxFyEgyASftlBYzkJGz%2BC7l2GVC9dVvu0HjSWVR8KZP%2BbV6kc%2B8qPXn7rAaHrPyLCxzTXFtOiycgkeqtUhRyymrLuJlGD8i91LeSJOau3AFGlN4T%2BpELZHfXG%2BHXyF0jDLePxCI%2BWlSo4hpzAMHtOxjbPDmKf%2F837kC9Qzw8fb11Fc9fcyQFpemqizQX7nI9qCq3XneDMJJsVnMcSmMa2sAkdVBjHvGY6HP6IL69AHBYlxPbsUnJBOD1bq%2Bqq2NezeQbz9YCaq9dTXkPQsdro14CjVJC7kUWc8QLSu0GhY6omoo9DCP1JAb4IkGZWA%2BqF1g7pgzIafl97dZr2p0cpIXS%2FYIHK%2B70K5Uca%2FCfLCRyT6NHsOE3rs1weBpF4OOm5ovZCDFMtIY%2BNWcKJ143eXnSDV6ayoz3uCgb%2BXCYVijDWBONcGvBANmokcCBUQH8ovyqXxdlsScGj2t7S0CCCGY2R54zO2cE1MwuHdTE5encfUrkBKWz3plmR2esu63%2BPJDD%2Fi429BjqkAchFU64c7z4vC4mZcJbqhy94xzbj8rUmMqlvlVeqB2jPhD3aBZM%2BqJv9N%2FIZLqcShI98a3FS%2BzS%2FTSvRqzHA6YluqlnViHJq9wfpPF%2BT2JfZrmnBBWrR1PP3KfCVB%2FKulG2f99AhxJaz4V%2BbyOFXN%2F2WqUCxOoP9GRS5pLUYpHS4ENR7pf7DAQDIBcpXRWZbxyuElqk3sIP%2FahE7MHApsdQPvozG&X-Amz-Signature=e778a9b08162794b5f015ae939964f81c11a1cde3ee7195fc21f0d72ca2f5c93&X-Amz-SignedHeaders=host&x-id=GetObject)

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
