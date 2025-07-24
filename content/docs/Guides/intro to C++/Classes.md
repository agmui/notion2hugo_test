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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677HDLTVP%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121728Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIQC802N8wwFOmeWdwXtb8vNLIyrLfDKpqgcyuy%2Bt68IlzwIgVHD5ZB7QtXvcrm%2BanNv9jguQnGo0pgmD0wofKzNyFhoq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDMkhbFm1SI0xj%2FvdXircAwSXqroU0wE6nRCqVOKzNUb29NFYKjnVDRuK4oIafd9m5QTnDyfC0DGCICdDTlFuqdL%2BGsvMGNlWQjdWi%2FnZ5BhSdgTb48VRxAsII7WVo%2BCiOC723hmepN6gv0Mjn06bg0JDxpbF0OMXC77gOnj875kkWTNGu8p%2BF4rGat1uLQpGiejioZrBx9mv2WuzHmf5Cixj3aJkyQLWti8nHFFGFPgBRMGGifPbnpf5XGbrnSp1V0wTcTYDJvB8Tba6OyRh1v%2B%2FN3NNejPD4GvPVPWGzW19%2F%2BW3Sms7RYVxZnjah%2B5LxWnlxRypUePE0cZrRxqGqoq9PW8M0MSUxF5Z6mij5OdTgGDR%2BzTyaZyM%2FzRhsg7sYkxyLGBsA84vwtxDhqD7YePg1g%2BIGK9BEXi4PFdzaLejYNulW5FhQabwY01wr55ROcDy0kndBmkC6guDWKHanNRMzSpRpfXj1Md5FscdBOsXWsiyynd5ghgj3QD1rG3w6kwOX%2BV66zmE7swjzc8hOamxiwhjhwSgk6830soCQ8Nb68MkNNVwGcZHIFgZtayhnZL0pgc%2FlPHObeoTv1K%2F%2BU4URy7NlP6ky6l0QMwaV%2FUya2S%2FKSEnz%2Fsrx5cb8H4jFwje3YmAmHoLC%2BtKMNK2iMQGOqUBXTJvpQmjZ4g9rRnRcmfHAgPWvLkPFr6m7LHeA42%2BKmGhzSKVto2LLo3udvQqGwfu%2BigSkWv4jhwIERTR0JrPh4XkUns83h66Uf8ZdM5V8miZ7yANwt9%2FZ7sC9vC6beJW4r2E%2BJYxQx9aLvmcvRzxWbfU7zMdNmLALTqRSTUxG5M99pUVKQsK4%2B0h60%2F4NkpM2u6VK68yJFqWdLQeDxl8hhzW8HLD&X-Amz-Signature=ed3bf9933238986f5546d7a16ea31ed539548b88276972096d66c004bd346087&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
