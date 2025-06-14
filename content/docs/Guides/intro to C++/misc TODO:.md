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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAG23LWE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCT3k7ZApdp5ed%2BcbSMYdV3drqpOgsLBx%2FZTGNgzV0p5AIgA5A17fFp9W8wQzzI3lxxVqvnsZesuRX65Bzl9o30Le4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNjCRuPcSSdkdzRhNCrcA2OLTCCx%2FIog1mEkmPPySdzYBIVs5p4rLAwt9yWsL%2FnuGWZUmsbfQNDGkpJHi%2B96oKf2TLKYjl%2BMt6B2kuRC7dbGOc2UU442aTVkqA8uR6I4z1AZxJchs3QJTlcs0hZGEzu04SGa6eX1KBi4lg6bX3BGhJVyFADEuQunE9Nt%2Bladzd5HunfrZQ5OENp54ZrA4kOg8eif%2BsM%2FXR62pLEm0XZxlqEmIS%2FpfS5dI5PVn2CF%2B84XSyvp9cRJpy9z3wrQ0oEFx3H06wdGuH9fWhMwqob7x4toOiecGRtAhcoKQjO%2BWuAHnh59AJ7w7ywhepJ2CkxXZNMCV2rZ4B4bes3WRHWOppsA%2Bpcjy%2F%2B05EPDeSGWdjd8h%2B3x%2FPWFPD%2FHRYCBez3oXDD3mpBNgFnifpahqnpOwblB1MQXyR%2FcSrphemEVldePMb58N%2B%2BMZPw9%2FulKJwQYt0n8FjTBzVageFoG89ytThM8mzyQw5gGfKIeqfB%2BhzKdsrzWPnkEWfGAf3Sa0GJvNLEcUdKm%2FL7XJYNYrTKtkw%2BeRgtg5%2BIeQw3HSUFrKnNafIfv0MAjH0Xqsfmvz8RQow967IZeKkw0TSWREX93J%2B5KaUXrY5ZnruuGSl5NQ9n8ocMTRqe6DSOsMN66tsIGOqUBpitequ9xRKfM0BsJVfNe%2FuQNOaOUtD6svruVg5srxwIfgB44i53sERuM1BOCr8XVLjwIk9VEPNPE2vs5uDNhUumoQNhGYPE4XXxo19Gf1DC5VbwBYf3vb3kQUgggi%2FS4Q22m%2FXKS3nGdHmPZTwhXivZi%2B9zsjBUGnTlAFSa0VFVC8LCkItBFmEw70gVrGpt39E0wy4zXuh16Ed2AWfS7ikl1mEfe&X-Amz-Signature=68a4bca051683a1225e3146356517ea40899488bacd9734d553805e7d5dcbe64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAG23LWE%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T160856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEgaCXVzLXdlc3QtMiJHMEUCIQCT3k7ZApdp5ed%2BcbSMYdV3drqpOgsLBx%2FZTGNgzV0p5AIgA5A17fFp9W8wQzzI3lxxVqvnsZesuRX65Bzl9o30Le4q%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDNjCRuPcSSdkdzRhNCrcA2OLTCCx%2FIog1mEkmPPySdzYBIVs5p4rLAwt9yWsL%2FnuGWZUmsbfQNDGkpJHi%2B96oKf2TLKYjl%2BMt6B2kuRC7dbGOc2UU442aTVkqA8uR6I4z1AZxJchs3QJTlcs0hZGEzu04SGa6eX1KBi4lg6bX3BGhJVyFADEuQunE9Nt%2Bladzd5HunfrZQ5OENp54ZrA4kOg8eif%2BsM%2FXR62pLEm0XZxlqEmIS%2FpfS5dI5PVn2CF%2B84XSyvp9cRJpy9z3wrQ0oEFx3H06wdGuH9fWhMwqob7x4toOiecGRtAhcoKQjO%2BWuAHnh59AJ7w7ywhepJ2CkxXZNMCV2rZ4B4bes3WRHWOppsA%2Bpcjy%2F%2B05EPDeSGWdjd8h%2B3x%2FPWFPD%2FHRYCBez3oXDD3mpBNgFnifpahqnpOwblB1MQXyR%2FcSrphemEVldePMb58N%2B%2BMZPw9%2FulKJwQYt0n8FjTBzVageFoG89ytThM8mzyQw5gGfKIeqfB%2BhzKdsrzWPnkEWfGAf3Sa0GJvNLEcUdKm%2FL7XJYNYrTKtkw%2BeRgtg5%2BIeQw3HSUFrKnNafIfv0MAjH0Xqsfmvz8RQow967IZeKkw0TSWREX93J%2B5KaUXrY5ZnruuGSl5NQ9n8ocMTRqe6DSOsMN66tsIGOqUBpitequ9xRKfM0BsJVfNe%2FuQNOaOUtD6svruVg5srxwIfgB44i53sERuM1BOCr8XVLjwIk9VEPNPE2vs5uDNhUumoQNhGYPE4XXxo19Gf1DC5VbwBYf3vb3kQUgggi%2FS4Q22m%2FXKS3nGdHmPZTwhXivZi%2B9zsjBUGnTlAFSa0VFVC8LCkItBFmEw70gVrGpt39E0wy4zXuh16Ed2AWfS7ikl1mEfe&X-Amz-Signature=3e0a56f8d4e878068739046d085f960361d034a5c8ac50135395db0037a60ea9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
