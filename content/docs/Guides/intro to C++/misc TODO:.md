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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7LW5BZ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIDIJNipza7OUnXqA4pazaiQdy03ukgPiIoRtojiaC9qxAiAW3CFvZ5Jkm9BJXj2IUBhTjyBCRsKRk8z1tfS91EU0RyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTf5%2FIJEgPaH4OQOiKtwDBSc4hshdYJu%2BexcW0iFLrHDBdlvbm9ffkg6tqtzaVEMASDkSM9PO%2F%2BbJQHce4ffG5S2XjDbpJL2sapqG0LXWEBDOM2KbilF3aWrzki16rjDMVkz3Bn%2FpLWKScko01nbiGUAA1A5qj%2BQMrjXSpQ0wQ4wQr4FKVhM0Zza6oGWDhBzPyOFOneOsYtb8V4pSvXKbiwRttdqddw24YzAhVjBnwD65etcGIM%2BEEdG15eHJoMjPWCNgx6Upwjtm1Isyw5f62dsgOeXTANOuhuHX2NzeQypJM1IgEU5IH8eQg9TTcQX6KL30UcsQbbsEX4DlGhislUYf5HUWsiXRNfawx%2FAakOzcOm5nPfwXnKrAPbY%2FKLn3RYMyy2lf9T%2BJD6QDwt4aKPP68zMs8gTb5DdTcumOE3yx1ww%2BvMVD2dVfXLOQLpboqgz3fz0%2BgXXo1EXe3sLr8Mq1jVfssWXP1MffWPmTaKgpxo3%2BohOELfMiqmNiMljkruYq8I5ufZqfJ7482XBe0GgXZI7kYgGkL8%2B1chcDQsiCPNw%2B2raxsIcU3%2F8s1M6YHznJqr6Feqavlzk%2Fp9xnp%2BZ%2B%2BBoBEV23kCEdsFShUMx9cLu3aqmw5obhNQ1LKWmjZ8bG8vCjJ8KNTLow9ZO6wQY6pgFQoWcGF04atLtj%2FF%2B9hAECAgwvP5Wgn5gFHIIR9BaSLXNK0a85IPabXGXcISymwsdh2BCieKiWwoft2y8%2BVq%2FRPtPxPP%2FpsAnF6ITuI3e6Ks9W66YbgauiT6jdvvMhZtLwBmMvBWqCSwGCtV%2FbLPqJVTn9Gmw3NDHIE0y4KdS6FjQ4t00GOeCSQeidILsyHBe1obKt2MGo8Fo0J%2FgvvlApk7pBYY2Y&X-Amz-Signature=cbb1a19fd54154801b26f30d227ce088727899332f515eb99d879a4273910806&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665A7LW5BZ%2F20250522%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250522T041350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJGMEQCIDIJNipza7OUnXqA4pazaiQdy03ukgPiIoRtojiaC9qxAiAW3CFvZ5Jkm9BJXj2IUBhTjyBCRsKRk8z1tfS91EU0RyqIBAjL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTf5%2FIJEgPaH4OQOiKtwDBSc4hshdYJu%2BexcW0iFLrHDBdlvbm9ffkg6tqtzaVEMASDkSM9PO%2F%2BbJQHce4ffG5S2XjDbpJL2sapqG0LXWEBDOM2KbilF3aWrzki16rjDMVkz3Bn%2FpLWKScko01nbiGUAA1A5qj%2BQMrjXSpQ0wQ4wQr4FKVhM0Zza6oGWDhBzPyOFOneOsYtb8V4pSvXKbiwRttdqddw24YzAhVjBnwD65etcGIM%2BEEdG15eHJoMjPWCNgx6Upwjtm1Isyw5f62dsgOeXTANOuhuHX2NzeQypJM1IgEU5IH8eQg9TTcQX6KL30UcsQbbsEX4DlGhislUYf5HUWsiXRNfawx%2FAakOzcOm5nPfwXnKrAPbY%2FKLn3RYMyy2lf9T%2BJD6QDwt4aKPP68zMs8gTb5DdTcumOE3yx1ww%2BvMVD2dVfXLOQLpboqgz3fz0%2BgXXo1EXe3sLr8Mq1jVfssWXP1MffWPmTaKgpxo3%2BohOELfMiqmNiMljkruYq8I5ufZqfJ7482XBe0GgXZI7kYgGkL8%2B1chcDQsiCPNw%2B2raxsIcU3%2F8s1M6YHznJqr6Feqavlzk%2Fp9xnp%2BZ%2B%2BBoBEV23kCEdsFShUMx9cLu3aqmw5obhNQ1LKWmjZ8bG8vCjJ8KNTLow9ZO6wQY6pgFQoWcGF04atLtj%2FF%2B9hAECAgwvP5Wgn5gFHIIR9BaSLXNK0a85IPabXGXcISymwsdh2BCieKiWwoft2y8%2BVq%2FRPtPxPP%2FpsAnF6ITuI3e6Ks9W66YbgauiT6jdvvMhZtLwBmMvBWqCSwGCtV%2FbLPqJVTn9Gmw3NDHIE0y4KdS6FjQ4t00GOeCSQeidILsyHBe1obKt2MGo8Fo0J%2FgvvlApk7pBYY2Y&X-Amz-Signature=acc4689b597d956cf6adfb8299ef7aade253592c85c6a9d5a79c0e732282c547&X-Amz-SignedHeaders=host&x-id=GetObject)

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
