---
sys:
  pageId: "cbb61f02-1c1c-48b6-9015-9a3b096c1017"
  createdTime: "2024-06-25T02:33:00.000Z"
  lastEditedTime: "2024-09-30T17:08:00.000Z"
  propFilepath: "docs/Guides/intro to C++/misc TODO:.md"
title: "misc TODO:"
date: "2024-09-30T17:08:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 120
toc: false
icon: ""
---

### static_casts/ reinterpret_cast TODO:

 [https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/](https://www.learncpp.com/cpp-tutorial/introduction-to-type-conversion-and-static_cast/)

### [Literals](https://www.learncpp.com/cpp-tutorial/literals/)

```cpp
#include <iostream>

int main(){
    std::cout << 5 << '\n';  // 5 (no suffix) is type int (by default)
    std::cout << 5L << '\n'; // 5L is type long
    std::cout << 5u << '\n'; // 5u is type unsigned int
    
    // basically the same as
    int a = 5;          // ok: types match
    unsigned int b = 6; // ok: compiler will convert int value 6 to unsigned int value 6
    long c = 7;         // ok: compiler will convert int value 7 to long value 7
}
```

{{< table "table-striped table-hover table-responsive" >}}

| **Data type**  | **Suffix**                             | **Meaning**                               |
| -------------- | -------------------------------------- | ----------------------------------------- |
| integral       | u or U                                 | unsigned int                              |
| integral       | l or L                                 | long                                      |
| integral       | ul, uL, Ul, UL, lu, lU, Lu, LU         | unsigned long                             |
| integral       | ll or LL                               | long long                                 |
| integral       | ull, uLL, Ull, ULL, llu, llU, LLu, LLU | unsigned long long                        |
| integral       | z or Z                                 | The signed version of std::size_t (C++23) |
| integral       | uz, uZ, Uz, UZ, zu, zU, Zu, ZU         | std::size_t (C++23)                       |
| floating point | f or F                                 | float                                     |
| floating point | l or L                                 | long double                               |
| string         | s                                      | std::string                               |
| string         | sv                                     | std::string_view                          |

{{< /table >}}

### Const

- `const`
- `constexpr`
- `#define`

### [Enums](https://www.programiz.com/cpp-programming/enumeration)

```cpp
enum season { 
	spring,
	summer,
	autumn,
	winter
};
```

### compiler flags (`#ifdef`)

before compiling we can have some options for what code we want

For example, we can have code only for tests, simulations, or hardware

this is done through `#ifdef`

In Taproot the options are listed here

{{< table "table-striped table-hover table-responsive" >}}

| Name     | variables                                           |
| -------- | --------------------------------------------------- |
| Test     | ENV_UNIT_TESTS, PLATFORM_HOSTED, RUN_WITH_PROFILING |
| Sim      | PLATFORM_HOSTED, RUN_WITH_PROFILING                 |
| Hardware | N/A                                                 |

{{< /table >}}

We in <u>Hardware</u> mode so in the `#ifdef` block line 30 will not be included when compiling 

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFDDEWU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsc%2FemV4nLolYfN6ADJAE0y3pWv%2F5Wm0Oh18kQMSWyqAIgM5HJ1%2FUjjlcFRO4cH3%2B8ZOUfSI1G1jjaPyFNjctlt5wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDE%2B5vsxMFpcNbh5ijyrcA4F8m6n6biYUp%2BQO%2B4PWICo061E6nXx87k1%2BIkVdGUt0256C6Gc6659EungJV0GiBh4Dhp3kG3C3Lf18RBpUamB0xWWqtYy33WJaGMVniXlD%2F4clGAMr%2FFn04Veuvq5wQjVilxOLwTqYlcqVzc%2F0S6FhycSe4Qno5JyPXm%2BIBFqqrhn%2Bk%2BWZQ7hRIid1w%2BQOpaBFGARr8uaya18HQLrS3ilVP2Z0Bap7s%2F8WBzxigl03ZFhe5%2FsxQoz6KFfESBKTGo6ekl6VSxs4UwJz8hAhNEsfdC5E8FWB7pm%2BWXVJlI59MA9fxYtQifv5SpWjbzN6C8KQRC3jJqj833YT6laHF%2FiqrJYRpFp6yWBIvJOlgT3GWrehzUU1%2FMgArvKHjRaqS579RGn9YMp9Jz9LqG8WdADnaxMtUwyUd2DilbTGJnzIPke1yA0xwq7cqBg39CX6c4tmsJ6CovACk%2F1Hn%2BSdbdTQPHSUeJ46ZoB2ek7bB%2FHHeIjb09elEMqADyJOYBCorcQd1r%2Fc8ZkrIb8LecBSuXb7I8XC6E9iTlDkt0FLZFyjIZ7PxWoJlnPtm6krX4xamk%2F%2B8hSdbXuFkIw0upxqq8r7zP%2FESHdJCzwY0SurUZrvRs53MYrCczgjbtKIMNmpq74GOqUBj0EFaG%2B%2FNQl0SaGe2Tn3t8HAYrN4EjzNF0hYFlpH3uoKFPwT0aoKQXmxMF41c14gf4GpH140XKOa%2Fd3qiCACNfm1BlpQJ0XpgD6atJ94hdpAvlBt63fRh8weudTiMvBNNuwbgL5uxGceb3IfmqW1gXa6duqybl9xBxk%2B6X3VYTZ2BXufI6N9xsrhTOqR2j%2FrYsVucQTCVhMtbeafAjhizPkcD%2FfC&X-Amz-Signature=4cbbe8d6adf16046eddf4b470295a1804a28d1b9d8fe661090538a84b1b7648b&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RWFDDEWU%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T121354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsc%2FemV4nLolYfN6ADJAE0y3pWv%2F5Wm0Oh18kQMSWyqAIgM5HJ1%2FUjjlcFRO4cH3%2B8ZOUfSI1G1jjaPyFNjctlt5wq%2FwMIRBAAGgw2Mzc0MjMxODM4MDUiDE%2B5vsxMFpcNbh5ijyrcA4F8m6n6biYUp%2BQO%2B4PWICo061E6nXx87k1%2BIkVdGUt0256C6Gc6659EungJV0GiBh4Dhp3kG3C3Lf18RBpUamB0xWWqtYy33WJaGMVniXlD%2F4clGAMr%2FFn04Veuvq5wQjVilxOLwTqYlcqVzc%2F0S6FhycSe4Qno5JyPXm%2BIBFqqrhn%2Bk%2BWZQ7hRIid1w%2BQOpaBFGARr8uaya18HQLrS3ilVP2Z0Bap7s%2F8WBzxigl03ZFhe5%2FsxQoz6KFfESBKTGo6ekl6VSxs4UwJz8hAhNEsfdC5E8FWB7pm%2BWXVJlI59MA9fxYtQifv5SpWjbzN6C8KQRC3jJqj833YT6laHF%2FiqrJYRpFp6yWBIvJOlgT3GWrehzUU1%2FMgArvKHjRaqS579RGn9YMp9Jz9LqG8WdADnaxMtUwyUd2DilbTGJnzIPke1yA0xwq7cqBg39CX6c4tmsJ6CovACk%2F1Hn%2BSdbdTQPHSUeJ46ZoB2ek7bB%2FHHeIjb09elEMqADyJOYBCorcQd1r%2Fc8ZkrIb8LecBSuXb7I8XC6E9iTlDkt0FLZFyjIZ7PxWoJlnPtm6krX4xamk%2F%2B8hSdbXuFkIw0upxqq8r7zP%2FESHdJCzwY0SurUZrvRs53MYrCczgjbtKIMNmpq74GOqUBj0EFaG%2B%2FNQl0SaGe2Tn3t8HAYrN4EjzNF0hYFlpH3uoKFPwT0aoKQXmxMF41c14gf4GpH140XKOa%2Fd3qiCACNfm1BlpQJ0XpgD6atJ94hdpAvlBt63fRh8weudTiMvBNNuwbgL5uxGceb3IfmqW1gXa6duqybl9xBxk%2B6X3VYTZ2BXufI6N9xsrhTOqR2j%2FrYsVucQTCVhMtbeafAjhizPkcD%2FfC&X-Amz-Signature=9aa0cd9ffd344b872906d82cc4cef2c24ac1754272ba19b9e7daf80e8f5a5093&X-Amz-SignedHeaders=host&x-id=GetObject)

## c++ practice

Using everything you learned try to do these:

- simple ArrayList class (try adding these features one by one)
	- class field should have: size, capacity
	- should use a template and namespace
	- Default size `#define size 4`
	- Constructor should either take an list with values,
	 or nothing and just create an empty array of default size.
	- methods:
		- constructor/deconstructor
		- `get(int index)`
		- `edit(int index, T val)`
		- `double()` doubles the array
		- `append(T val)`
		- `print()`
	- If you want more you can write sample classes for stacks, queues, trees, etc.
