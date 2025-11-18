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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SB5TODC6%2F20251118%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251118T013759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRcOuif%2FqVY16UONLR6feqq3NjTszdKnB9SZcQNy4KCAIhAIKVHxeF2vA0VNxg8LQ6K6akGhyoeoSLl9KSEONpUatwKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzCthLCdCdsbTvB5j4q3APVVzSL2f%2Fhrjkp%2FVqWqgI%2FBGgkhOQ3Efpv0B6lBNKu1jSdRQ9KoX%2FbpOVgxrjyB4JrPAfqInKbCK%2B3yQU0lnoXxH0Afcbkn7JLqr53wHCV3TUik7HkNWjdBkV8H38T4aOWwYP8dRWbqUwRpwwQRxkIGPpqB5BA60eSYHb%2FB88orEvBrkPKis3AMyvbUrMsSKFv%2B%2Bjyc6a%2Bzs4SOw2wnuc1qKk13aES7YEb6RTIn8veT5AQMTFcD8U9sYyP9YJL1c5P%2FpMNID0Yi1w2jwHoAt6ok42cn9ERPeLkGU%2B7LdCHyJSQHNpN90wwjdEe4xa4YVxVP19RlqSx55GZExdLw9TrREbGbkIOFkYYReSp32W%2Fm14TcUoJvlMqcpInAKkpvnzYhEkGk6PR2rQJOG3lE5gIE9fitn7dsMd7Je9y0uM08W1Bdv9SFpUoJ1EtNYx79%2FfHl4TetZeITem%2FilzY5FA1AD%2BqwCBhN3ikQ74s%2FjcW4VyleyxOH9CfZ2HZhwPZPY9JgQ3UE%2FnNi9rZquFMBaY2D9rQ9ckbJ4K5iWMG1gXlJboqMo4HVf18lOjLtZBZxK%2FqyXNaGrzte2WTnWaa9RvFYJnsaWqu45PJIngj82rn7hcsvyQrcHw%2FXO1dSjDPmO%2FIBjqkAce9w6yblCrsP2%2BNdFXZGk7KMLPciY2rF9a0ZRo4IU4r8CIfSLTnYGMRHwIUCfCvqGo%2Fug8qeSdfmYzWD8%2Bq1jP1A2AQJeY1YFzPGDHVKGGhlbNZGYuJuW%2FNwcNXr0BMBQkuy75%2FUPLYte9QJ2Qu2WxcNzLBh2rG%2FZTmsgtuhxtjmLvGoHWjGgGSj5EqTVMKHBZacAVpebgCDSH4Jg752jhzUuO7&X-Amz-Signature=118e4d4149d27915ddad8996c4e400f9b73f3b539d52d380639cd0217503fa9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
