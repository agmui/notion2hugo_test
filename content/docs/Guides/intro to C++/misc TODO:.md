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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGKLH6TO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEa%2BNq0UiiMgkp0sGkcMUCmdG4sHa25ooEZk3K9qTWGmAiAkUeDVtLt3zAiUZ3osvkOfhVbB5RIHcIfHgzJ9O0HtOiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVy3DXb%2Bnf72A9buJKtwDi5PVMtCJTwj%2BzTyAKTItxhBi7UzC3oiJwW1WReBXPanB%2BjCmhvMJsggS9EKQM6dMZnCJtGeElNYp1T81vC47xIpiQkkrQN%2Fd2qFfntXKA0yjhoZSoDrH3na4vvaCT%2Fh2IkYrKRbjC8yHQsL9Mt3a8ZQxN8KeVKVwMH7XTG054lXzd6ij2cwBMdepLW7YSSMB27fU7%2FozdImogXDbV6odbmtV0RGjBt9Sl5MD8sOzzO%2F7AXalHiKAwwV5B5IaJGeyIVllRw8Wa92I0IrWVSm3BScLczwqvkr9%2ByeWYh%2FzpMZ1uWOjoD4SUnliPi7mUe2NvB78yzw%2FG6mDQa0B17wSf%2BZ3avCUhQos79mAP%2BevCss4xadIIkZ34ZbUgTv1dZZ3MGQkef4%2Bl9D%2BGvEiJhqPM%2FQe3rShvxhMqU8BJRaRaZcHybmAsYOkY8XZioX7fLlm3BvwtZKK5nTFLykTKJN6bniwtaQf0cjHPy5YE8jiY5bjOT1eMKPMUHybqyaSDoJ1sq1QJfe4U8xhncWqcvpp9nH6ZF5bu41fpqf9VRvGsnJNBEHwz57ZZUrnzbryqQtZxzsB0ruwI23za%2BzpG5N2Ts9Nu3NJp9UqEkZTQs1JPLcN3fNYw7huazfey5MwkfDfwgY6pgHULzXeGDC0xTgk2ndM1PGTP6d0JWaYFIKrTKH6pAJTrje3kqxKU45rzXGXyf8uTU0X7m%2Fc7SWIOk5WVL%2F88W2k041BZ7MPEavh5vHp7F3m8jJ%2Bp%2FdQo1GIkvyVMhyjZEArIzG7ZR%2B2x3DSMQ5kdq1kLR3HzLwI7XC4VRU8Jm1uYklJsTKej78%2Fa2vNsnAN9l2lOqYvHaUROkiIrW5HkFVtuIQGFUcu&X-Amz-Signature=4b0f852b0c195e3a41a79b6e2910592abb6d696caa196371e20d00ca6bfd2494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGKLH6TO%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T170706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJGMEQCIEa%2BNq0UiiMgkp0sGkcMUCmdG4sHa25ooEZk3K9qTWGmAiAkUeDVtLt3zAiUZ3osvkOfhVbB5RIHcIfHgzJ9O0HtOiqIBAju%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVy3DXb%2Bnf72A9buJKtwDi5PVMtCJTwj%2BzTyAKTItxhBi7UzC3oiJwW1WReBXPanB%2BjCmhvMJsggS9EKQM6dMZnCJtGeElNYp1T81vC47xIpiQkkrQN%2Fd2qFfntXKA0yjhoZSoDrH3na4vvaCT%2Fh2IkYrKRbjC8yHQsL9Mt3a8ZQxN8KeVKVwMH7XTG054lXzd6ij2cwBMdepLW7YSSMB27fU7%2FozdImogXDbV6odbmtV0RGjBt9Sl5MD8sOzzO%2F7AXalHiKAwwV5B5IaJGeyIVllRw8Wa92I0IrWVSm3BScLczwqvkr9%2ByeWYh%2FzpMZ1uWOjoD4SUnliPi7mUe2NvB78yzw%2FG6mDQa0B17wSf%2BZ3avCUhQos79mAP%2BevCss4xadIIkZ34ZbUgTv1dZZ3MGQkef4%2Bl9D%2BGvEiJhqPM%2FQe3rShvxhMqU8BJRaRaZcHybmAsYOkY8XZioX7fLlm3BvwtZKK5nTFLykTKJN6bniwtaQf0cjHPy5YE8jiY5bjOT1eMKPMUHybqyaSDoJ1sq1QJfe4U8xhncWqcvpp9nH6ZF5bu41fpqf9VRvGsnJNBEHwz57ZZUrnzbryqQtZxzsB0ruwI23za%2BzpG5N2Ts9Nu3NJp9UqEkZTQs1JPLcN3fNYw7huazfey5MwkfDfwgY6pgHULzXeGDC0xTgk2ndM1PGTP6d0JWaYFIKrTKH6pAJTrje3kqxKU45rzXGXyf8uTU0X7m%2Fc7SWIOk5WVL%2F88W2k041BZ7MPEavh5vHp7F3m8jJ%2Bp%2FdQo1GIkvyVMhyjZEArIzG7ZR%2B2x3DSMQ5kdq1kLR3HzLwI7XC4VRU8Jm1uYklJsTKej78%2Fa2vNsnAN9l2lOqYvHaUROkiIrW5HkFVtuIQGFUcu&X-Amz-Signature=eec6c244e316ff320fbc3a131f641c908a31fdee3c48199caeaff18a4cd6056c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
