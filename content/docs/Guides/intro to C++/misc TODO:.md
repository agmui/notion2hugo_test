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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAO7ZHN2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSTm7gPj%2BXklwDTjiA9bUNnB6Ifc9m6B31VF4adGbP3AiBRX2%2FpHUWS0h%2BKxUVLtxbGwWFFun57NLpynkerKQoEdCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM2CiSFiMZx0JCAf6xKtwDSNvhVp89e92OyS2wXHd4xNwo4Yw4E3fDmuYaEEbbisJ8Mwo%2BWodMq23SCDcQgb%2BN6JCrhIo3UkkoxVbA7jtzLnKBCZiqx0t9%2F%2BUJ0urO%2FuZ0DyOE6jc1kBnQrgiDgudovwV9tQPDMl5nErBzmLGkQQj9h2%2BztHYc3Fh82iH%2FVSaNHRT46qaFG1%2Fv1lW0Q8NITm7MeCWgyh4h35Jdp%2B5bqkvstultr85Iw6kCnyOyKTYjWPq0IzX6SF7WP9qa8uKlQhC0soRxWC6hybW9uZAIM0fJiyKEaWRJFsHldSGhLB7omrkeLWXWbtEsWOow4tt1i7VRsxPx7LtqAzM4dpPq7JwxAVOJJ7BSXpe11uBJkuMZKSTTQA49p%2FyAczBzTZg%2F%2FOl0FlhyWK2%2BHBxrcbGHBhh2rzWsQLhWp1xV4E2DWf7FzaV%2BJfwKpbuUKYxocnWglXHAKWRUgcda%2Fs461SZkRS7aIVLpUu%2F0lzMwBJ3IbxweaHRiflhQjXRXAzi%2F3Uw%2FSf4DZ%2Ba4gWYcbYjzlvGzklA9%2B6TFOKKi5iHeNxoa%2F0PLLFIdJuB5hvS9zLkaEjnlzLqpO8bhhLg9i0Kszo32avR2FyVBaUsRUWumniyBYzJgLVEP1xQ5LfOxb4owzZDewQY6pgFXOxs1In2XEE7HthCvd0lps75OW53247klT9b6HGOYionOAW709i%2F9YVRMJIAdcOIKrYcAkgyuHCx9nk88PH%2BIjXz4I7jCEZ7WXigkMjGWy5WccmBMHbXd8q%2BYi5zCNxYJKMO3IeF8k50lIDoo9aOPDoXjXZOFjE%2F8UH2NjMzBWLw1%2FW38LAao8sk7hA1E9Da0bgbBw5tWCXepjqoYV%2BXPcjWsFCAc&X-Amz-Signature=aad2b996029f10f9a6437f558c653d543d0242d803c2c9586c2c8d6b95be5dc8&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XAO7ZHN2%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T220816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSTm7gPj%2BXklwDTjiA9bUNnB6Ifc9m6B31VF4adGbP3AiBRX2%2FpHUWS0h%2BKxUVLtxbGwWFFun57NLpynkerKQoEdCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM2CiSFiMZx0JCAf6xKtwDSNvhVp89e92OyS2wXHd4xNwo4Yw4E3fDmuYaEEbbisJ8Mwo%2BWodMq23SCDcQgb%2BN6JCrhIo3UkkoxVbA7jtzLnKBCZiqx0t9%2F%2BUJ0urO%2FuZ0DyOE6jc1kBnQrgiDgudovwV9tQPDMl5nErBzmLGkQQj9h2%2BztHYc3Fh82iH%2FVSaNHRT46qaFG1%2Fv1lW0Q8NITm7MeCWgyh4h35Jdp%2B5bqkvstultr85Iw6kCnyOyKTYjWPq0IzX6SF7WP9qa8uKlQhC0soRxWC6hybW9uZAIM0fJiyKEaWRJFsHldSGhLB7omrkeLWXWbtEsWOow4tt1i7VRsxPx7LtqAzM4dpPq7JwxAVOJJ7BSXpe11uBJkuMZKSTTQA49p%2FyAczBzTZg%2F%2FOl0FlhyWK2%2BHBxrcbGHBhh2rzWsQLhWp1xV4E2DWf7FzaV%2BJfwKpbuUKYxocnWglXHAKWRUgcda%2Fs461SZkRS7aIVLpUu%2F0lzMwBJ3IbxweaHRiflhQjXRXAzi%2F3Uw%2FSf4DZ%2Ba4gWYcbYjzlvGzklA9%2B6TFOKKi5iHeNxoa%2F0PLLFIdJuB5hvS9zLkaEjnlzLqpO8bhhLg9i0Kszo32avR2FyVBaUsRUWumniyBYzJgLVEP1xQ5LfOxb4owzZDewQY6pgFXOxs1In2XEE7HthCvd0lps75OW53247klT9b6HGOYionOAW709i%2F9YVRMJIAdcOIKrYcAkgyuHCx9nk88PH%2BIjXz4I7jCEZ7WXigkMjGWy5WccmBMHbXd8q%2BYi5zCNxYJKMO3IeF8k50lIDoo9aOPDoXjXZOFjE%2F8UH2NjMzBWLw1%2FW38LAao8sk7hA1E9Da0bgbBw5tWCXepjqoYV%2BXPcjWsFCAc&X-Amz-Signature=3dc9da94544266235bbd2f8312c1d8a6dd4447fcc086fc33a37acf6584c3ed30&X-Amz-SignedHeaders=host&x-id=GetObject)

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
