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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/8d467fe6-7dca-43b2-bf68-418ff08e35d9/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTCWLJKW%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T051555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCICcMvjcaikr9wSTf7HxWlV6MJDjajD3Ott7L8a%2BXeJGBAiBZiLN44tsBK3CE3YM7GmqzpYdKdMnyZD0Y7JOiTUiLkCr%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMwfnI0pkBBrdtsTF5KtwDeqnfSaAx9l0FMkR9iB%2B%2FqCuQFi4n%2F0TfRgqa98Wc9sk%2B5uqDwlNcaNW4GLzIzbf6obVFmB6Ta0amSXXppihB8lbWVUL0wiJWNgEqHD5aW8Ubtoj%2FMLyEWQ110xkDr5bbAjHzGwdFQuS9QMvEzym1cDjy5q%2ByaiFMNNy6L7bIQeBm5vvBlT9Fnkqcq5nv3EcR%2FbUgG6Y10vusIj%2F2MU%2Fe7pJWwS0WpffgOssBSyhpqHtG4ZFvqNNfkGFRh4z6ayQZLRpTwfz0FnPsWh%2FCwfgsl9ryBuee2WMT24igNWXhja0aEp%2FEWEeazj7PHqmZ7sNM897cTVnrrVXglBWWuOMXK2l0jFZFe13io%2B9y6S7oY6F68Rwvf3xaJR6l81twzgAIMgaNh%2FxgKR1a3ZcOLy4v69UagRDIgd%2FVMOqPQa2gV%2BsYKGBUP6PJRkYxwCykMI0FMjPD6FZIXimI17s9EN6iIYNsvDvOaK0%2B9M%2FtkzN0hgC8G4dVvVY61ZZhT5NCRUQ9eLHFRHW9CLdN5r6%2BJJLe%2BEXdPkdOoSTBjAk7woys4oEqxUKmuE0av4hhRC6PKPTX3byuy0qkQQ5D4xOHikcu0nI%2FWJceF%2BxlhYkPlp7aa6dmMhktOaR1HOFog2cwgO7hwwY6pgE4ymolS3WWbbPpppE%2BDXF59bAFPq69BWlhz2bEfvx2WO4SJvySsaYuJ6fdTsvpI7mCh1DAf2Ej%2Fg3%2BVttwX7hyDRRAlcT0%2FTcHOThBcgYm%2B1kVCP2ROWhizDwovzoiRdLI%2B2vQD4mDUSTNdAzOFduR24ryDWUaKnSY%2Bv2WL3JCDTtS7QBfyRDW8%2F%2BCO%2BTJIWmH0MZbpr7loMt4gWe%2FQ9A5EYAfLkJ0&X-Amz-Signature=8c5b7e4ee13e47c38e29af753e0a5244ab775d82ca192593ae66e42ec63bd7b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
