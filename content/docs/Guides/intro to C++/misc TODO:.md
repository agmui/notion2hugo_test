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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DD5PIYV%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtakEowGI7pDtm%2FLqOEblH4aSt48Vo8nFq43Q7dcdkywIhANI%2FLWMSZJ%2BMwe5uVsgoksLGR19WiBI4lkGDUHatwp0CKv8DCC4QABoMNjM3NDIzMTgzODA1Igwf1ORM%2FBe0Qc5eFX4q3APPfJDyl1gu2%2FiF%2BSjGZlWtemtgkXb1koCl7nyZsucqLN0Ixv9pcfmg8D%2BLXSRhQTB5BJU20jH9D9C6iKFxQsZ%2BKEb1ZCVmYzz3k8o1u22yIFFVpE7uZhvYusXv7kXOnm8JRgGDILblMu2bahYcMLLtJiNFi5tWj1NpiiMlyPGZFf7ebA1KLWfs9PNkgtQqv8Ujkr52%2FLRREtB2HnNjkIKeNngpdyAKcxQFftHE9sjODHG4N6LW5RSdA07a6tsvKqgWRIcfLHLHHzWGyCcOA9ZxDQlSUMgyMmBdamJrEpPn6nieS1CAcnJT7qET%2B1VTbpatUn6ZkniBmMDvwa1tOao5l9bm2JI7%2BlY7HIS93q0eI%2F%2FGaLDcCuTPHK2EHeKkwn%2F3JNu9L0w%2FknE%2BBr%2FZzShSx67lY%2BquLFdFM0XgC6%2BZt3rqr93IWWZp6h%2B8rA46XmaZYzQswP%2F5ZoksFl3J6NOQdmFhs9mISceDX6jciZQ5vjLa%2FN2AoqNTlfbrYMf7H%2BxRRzlBhBDKMa4KGgE324kHZDVTc%2F%2BDqN3Riu7lJQ%2BGPnwwb%2FzTFwdrnRv7jrGZlKnduJ7x9giJ3qQmh1SZ4ezIYPlmgLWb7ld5TQvQ64K9FCIf8l4ObK8MPP76xTC41vG9BjqkAdLnZxOo%2FwQQOeXt859jxAErRyaEYc9wqYOomprXXSrLQg5F9tCSxS%2F2JZzxW0CidzUkL9cfthz%2FL9yALcYJub1R9uGNwdgJRq2jFbF0F%2ByJUUOt7J5vuD%2FyddzbkKUABHCG7HRqQar3wUCbWmb76E0WOvnS8zwwBmjWLHuwEkrI5fiVKnj9iu5apEZZld8TPSm9Q%2Fv6drIFvCb1dUgRlrJvyIey&X-Amz-Signature=b4fd83c2bf1fc94e46f93250d40dce22149836a5540c4929fb32f27ba90381b6&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663DD5PIYV%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T140748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDtakEowGI7pDtm%2FLqOEblH4aSt48Vo8nFq43Q7dcdkywIhANI%2FLWMSZJ%2BMwe5uVsgoksLGR19WiBI4lkGDUHatwp0CKv8DCC4QABoMNjM3NDIzMTgzODA1Igwf1ORM%2FBe0Qc5eFX4q3APPfJDyl1gu2%2FiF%2BSjGZlWtemtgkXb1koCl7nyZsucqLN0Ixv9pcfmg8D%2BLXSRhQTB5BJU20jH9D9C6iKFxQsZ%2BKEb1ZCVmYzz3k8o1u22yIFFVpE7uZhvYusXv7kXOnm8JRgGDILblMu2bahYcMLLtJiNFi5tWj1NpiiMlyPGZFf7ebA1KLWfs9PNkgtQqv8Ujkr52%2FLRREtB2HnNjkIKeNngpdyAKcxQFftHE9sjODHG4N6LW5RSdA07a6tsvKqgWRIcfLHLHHzWGyCcOA9ZxDQlSUMgyMmBdamJrEpPn6nieS1CAcnJT7qET%2B1VTbpatUn6ZkniBmMDvwa1tOao5l9bm2JI7%2BlY7HIS93q0eI%2F%2FGaLDcCuTPHK2EHeKkwn%2F3JNu9L0w%2FknE%2BBr%2FZzShSx67lY%2BquLFdFM0XgC6%2BZt3rqr93IWWZp6h%2B8rA46XmaZYzQswP%2F5ZoksFl3J6NOQdmFhs9mISceDX6jciZQ5vjLa%2FN2AoqNTlfbrYMf7H%2BxRRzlBhBDKMa4KGgE324kHZDVTc%2F%2BDqN3Riu7lJQ%2BGPnwwb%2FzTFwdrnRv7jrGZlKnduJ7x9giJ3qQmh1SZ4ezIYPlmgLWb7ld5TQvQ64K9FCIf8l4ObK8MPP76xTC41vG9BjqkAdLnZxOo%2FwQQOeXt859jxAErRyaEYc9wqYOomprXXSrLQg5F9tCSxS%2F2JZzxW0CidzUkL9cfthz%2FL9yALcYJub1R9uGNwdgJRq2jFbF0F%2ByJUUOt7J5vuD%2FyddzbkKUABHCG7HRqQar3wUCbWmb76E0WOvnS8zwwBmjWLHuwEkrI5fiVKnj9iu5apEZZld8TPSm9Q%2Fv6drIFvCb1dUgRlrJvyIey&X-Amz-Signature=66aff2765b06e6a04a921a0512c6602edc4bff1db2cf6579bada46187f8e6ce3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
