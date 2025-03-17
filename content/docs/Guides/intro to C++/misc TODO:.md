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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5AQZS5O%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDykD1yLoyuOat3cBlEUINjl2Ke6mJxb25lI8ks4nnnGQIgcWiwH17pNuVoi6FrO7kOUcF4h5I05b40z08KhcNTk54q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPNOW14%2Fuu5R1mS3JircAwfo4Rc6ee0YmHxflxHpbS0ca%2FLM%2BAP8Oez5kmNddM4YYQdsWVnKUSVkI82l9Ht4tkeGYFT9%2Fb7GCq%2BwtlaEMmfFy2vQFvwAVWQgOS%2FOiCAhTgtEZHU8vPrILPBykFkDfJyD2K6DPpvmn%2FqYidmGqhX43AgVggaZuiMUg8%2BfaGABVuhyxgYFxMKOB7qUnEfq6p%2B3KQsfW53tockJVMF07UvpkYX6RgOc%2FqihWsShR6cQo9KY2OfEFCBVgItZA6wfPqhqtCnY%2FQOEEvSQOCN6mlIBrPwpvVrSC8MJLVxNjNWEoZrKmqkrK6nh3Rrdr3TlsQLW8Jg2FVb%2FZq9F4J20ZagYKsd4EZL4a%2F5vHNxBYTuuA3gx3VvnWqnLPJGELRgieqa0hFGGx%2BFkRale8Vqg9MxQ8XocRUv9HHhWckZ8sBdk7rzkPJjBjz7d9WVdbtQAvmmw5a0aqQ0L%2Ffh%2BUyvqGqK7yVdLFPjNjhx4E0LmP%2FSheaTwz9RJ%2FjRsoNeW1T9M0LE8ooSyozyh6gogB2ZWQwZC2eJLJG%2FQhC6yv%2BHhR5EfR5FV2eKNijFDwsDevQNKcwzw%2FVco3jWuhucXBw%2Bn7jK8hclDA3T%2BAc9nZQlcMpgGReNp1WXfFVRJKG12MPic3b4GOqUBAQKYGXOuAq4Uo033%2BmnFLw7oNWR1U439%2BvbLIMXKFurladFGNtLuwvL01DqN546g%2B%2BbNHZbz8JcYv30%2BKwX33Vtkp8vXQl%2FnOWR0ly8f4y6sciUR1d1bS%2F3aUrECYdtvbTozjhoFrTrzfnPzUP0%2FGq5K%2Bvj1GoDMblSdUqmXWokg1Y%2FDzX2grxwEkAXSuieWdkwLCiUpOWHXkr43NUTOxDYlYiD%2F&X-Amz-Signature=811a4a44881e25dacad40bcec8c2fb2dc951109e9d24fb7393168cf77cb2074c&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y5AQZS5O%2F20250317%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250317T003945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDykD1yLoyuOat3cBlEUINjl2Ke6mJxb25lI8ks4nnnGQIgcWiwH17pNuVoi6FrO7kOUcF4h5I05b40z08KhcNTk54q%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDPNOW14%2Fuu5R1mS3JircAwfo4Rc6ee0YmHxflxHpbS0ca%2FLM%2BAP8Oez5kmNddM4YYQdsWVnKUSVkI82l9Ht4tkeGYFT9%2Fb7GCq%2BwtlaEMmfFy2vQFvwAVWQgOS%2FOiCAhTgtEZHU8vPrILPBykFkDfJyD2K6DPpvmn%2FqYidmGqhX43AgVggaZuiMUg8%2BfaGABVuhyxgYFxMKOB7qUnEfq6p%2B3KQsfW53tockJVMF07UvpkYX6RgOc%2FqihWsShR6cQo9KY2OfEFCBVgItZA6wfPqhqtCnY%2FQOEEvSQOCN6mlIBrPwpvVrSC8MJLVxNjNWEoZrKmqkrK6nh3Rrdr3TlsQLW8Jg2FVb%2FZq9F4J20ZagYKsd4EZL4a%2F5vHNxBYTuuA3gx3VvnWqnLPJGELRgieqa0hFGGx%2BFkRale8Vqg9MxQ8XocRUv9HHhWckZ8sBdk7rzkPJjBjz7d9WVdbtQAvmmw5a0aqQ0L%2Ffh%2BUyvqGqK7yVdLFPjNjhx4E0LmP%2FSheaTwz9RJ%2FjRsoNeW1T9M0LE8ooSyozyh6gogB2ZWQwZC2eJLJG%2FQhC6yv%2BHhR5EfR5FV2eKNijFDwsDevQNKcwzw%2FVco3jWuhucXBw%2Bn7jK8hclDA3T%2BAc9nZQlcMpgGReNp1WXfFVRJKG12MPic3b4GOqUBAQKYGXOuAq4Uo033%2BmnFLw7oNWR1U439%2BvbLIMXKFurladFGNtLuwvL01DqN546g%2B%2BbNHZbz8JcYv30%2BKwX33Vtkp8vXQl%2FnOWR0ly8f4y6sciUR1d1bS%2F3aUrECYdtvbTozjhoFrTrzfnPzUP0%2FGq5K%2Bvj1GoDMblSdUqmXWokg1Y%2FDzX2grxwEkAXSuieWdkwLCiUpOWHXkr43NUTOxDYlYiD%2F&X-Amz-Signature=d4173927a46d2c2f37aca04c9eaefc7b2c728788a438be3fa158e5b12bfe0daa&X-Amz-SignedHeaders=host&x-id=GetObject)

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
