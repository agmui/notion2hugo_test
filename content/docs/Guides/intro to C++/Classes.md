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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5PAGUK4%2F20250519%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250519T004405Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcJzfved6%2BtLun%2BIcaCknB%2Fo46oMlFXw7BjSQkotNXhQIhALy973GkjqSUGgGFIVDgOfcKA8JIUhBM1ltXrjsOq%2B9BKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIwCibn1znlVNxqNAq3ANnMny0KRKeCLHEdqdAN9lWbgJog%2BdSbuDru%2BV0UluIQM423nQbk1EU3znUuYqHMJy%2BHuTYTXeRhnPIrq6TUn1fr5QxkjJeNJKLGOSTIMrKRdLsRzb%2BstFhTAZVfoIupPvnWvxaYCD%2FuuzbZLw0IflNJA2WYDf3roH7x7%2BlVIoE9OrR7Hn7pZulKM1NJNbz15%2FU8NQipfZ%2FZGB0OYk%2FsIY2w6P29pYtvmbtpTV25A8BBxXjh9JnUh2vrZzQ8SdKYgIIS%2FOg1QoZ7Hd58q6g7wAjvXMvU5BUqmTJOemE9knvIJ%2FqlelCarkyB443bVdutTsMQMM0D4AFo%2BNMuXttEmfhbGJgGcKkFEtyPHl8sGyK8EiK1WWN1lqCMhjsFKL6K2tvqSOyfThQQK8rU0kCayDqIQ%2Be7u5%2F0Irtlb1TOBkRPf4fwaoRO5FNbr9O45P2AuCEQh1ti4%2FMsT72fqmzCBCs9mfLKeF4oybS7VxQM3Ti4mtsxQKqoQlwpiYO8ADrwm4WwLvU%2FVihCQQQejD0mask%2BJEft81F902dExe4PmQ1pNwNAhRaZfXfwDzcRWY%2BmdRetfG%2B9wkkVQDrqp1IjS%2BOGpJHBQiNwjdwU2Rf%2FZxnSyWDZXOgXFzCg1QNbzDN7KnBBjqkAcOVmC65JahPiXl%2FTOeUPPHnBI8vdFO4q7%2BvS6xuLSjhOnRpGtNzyb%2BFs63szcUTKnMbbz8%2FJbtzbvH0m7tRkA9rOPglc%2B3Do9RgVOmXGcRjv1jgDTVBepE96ksOCHxVw0gU1UGfZPrJJMe35BnQn36a7Irvy5yRmiCu2r4b6BWpHv4Z4UBEnEbumi13MLYg70mLPbLP4PPL%2Fu3aB21U0MTP5LoQ&X-Amz-Signature=8fa15eb83b833ba1b52702a8230877121531480f59258b6ef8d0dc2543433bc4&X-Amz-SignedHeaders=host&x-id=GetObject)

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
