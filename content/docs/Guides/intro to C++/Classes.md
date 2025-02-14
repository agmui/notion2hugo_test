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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657EVB5EN%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T140720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIF1F2gy2O2Q%2Ft6E8E86bhockTsIMVvVtxre%2FfBmreA7OAiEA07TSUiJ6GiJvcPElESlFZTkfR4hz5CpTcFC0u%2Br8FgEq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDIZ%2B8RSywi7OLD%2BAyyrcA6mllloTyyvsIhHEOI72FHBA94rA37l9m%2F%2BmZPzXwsThRx0lHMzwi1fR0DI5kffQxLBRfZW8oeg9dwkaTVQ0YDw876bKAENRWebOZ%2BxxYbMk044QbY6XUH5EAW4725OaIkgKlx157Hb86cCZLUjT7cybaUUXKGxL%2F3c6i5i3wAL3k3a%2FG9pwuDkR6IE4VXjopCVSI74jssU1ROXcLKWWDGoONnRkk6wBjR5BvYhKfhpTXxRQffGYU4ecUTbN0ZnLVATpOvnlFh%2FCk7ZYxSqDa%2BCI2n8nwjiA%2BCCT752rju%2FX0fWkOFGvjHrIJWEoTs3vswK2WsCQzTca%2B0N0xcVo%2BTqE19gDPKqus17ex%2BMOfFX%2FjZKrTF9x2OEICmFLMoug0M4fTC8e3loklWhmoXoiajMZZ6U%2F44cWQkZvwedKi2bnHryoZe0NFZRoYPeADjvj81tjHKEOUFY5zcvjzoxNyz7gctahCO4381UBKOYKWxnyGW1MLSc9td3NfLDBDAjdEik%2FBRvGWf962EqUIvjA3U9kwo213d%2BxtqCnkQKotwYOkZMo1Ie4R%2BF4D2phfWQ0nDrQQ0De0K%2BMYbXkPjvkkiGRLhUWxa2mNpvbkANjwLYeIazN499iBJbDub4tMJXqvL0GOqUBqjt6bFjbbFcsH5U8vstYCVoOuC%2BlGiHsKgjpuoOdc%2BESvbS%2BcbE8riIpnGgo0fk2oXRWc6yyus27JB7z4euzQcUjhS8I5ran5mOlgJOUv8TiIofq76IE87p2XyZDZ%2FZxcaKquhIm1ypC7LBExid%2B8V99GYmW7GCup8STesMBAZ8BRNqU%2BKN4h37YwAIBoHe2nWX029kFUMHkFUM6amxuTPvCx9fm&X-Amz-Signature=beca647274d24b52eb43b78c6baa19ee5d503953cb42f0ed34a7f024754acc67&X-Amz-SignedHeaders=host&x-id=GetObject)

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
