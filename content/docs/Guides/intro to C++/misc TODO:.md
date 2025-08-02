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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4ETDGX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2WtAl4Nv%2F48J6NsUtl0RNODycqYOg%2B505FAZ8uNv18AiEAu%2BAhuRDhv9Ytg8qQYDMvtO%2BgW8T0vjdSt2BomylDdpAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEw0D%2F0EfZZtSuqRUircAyn0JGYBkll10ylvylHr9Xm7RL1ptuFQuoCVlIVVgh5spGfgyGYfkl5GlXrtZqNecrnS4tO%2F88gz0KQCLR40wVypq7XGmwdn9HMoWxhFPdH2%2F66zQQsXctMCAtVc9I8OaqHeBdq7BBw3zSOIorAeSPbz0FytEjc3c4fFAFLnZEM7lX%2FIr7nd5JJ4GqY3lzOEv28EBZLYV%2Fy2aFtvdlaDhNBUKKK6QEP%2BsQTWQAYj838g9mylKIdWBit3o5YGHtB5sBJ26%2FCjYpzGExt55Zuqr1Tg2HFWwcH6qYYD7hUJetP84dm2hwXRSx%2FY%2BL9CFhlDADdANwNQR9jTkJ8AxO75AcZg0g%2FJkY9ihy4xWHNEpTckEJIxM5LhtRok%2BzGCLVvzhh726jnIzO8a7t5WYJWWschcVqUmY866OS01sXPlY9ghgQApOpn8%2BtoNCXOsewI%2FytN4oZJjZsE%2FXqTcAXHM6mZUYalThF7YqMisOqegRZVMH7Eza8rjYihhP6TkzUaczywaNYOwlWTfp4GaFU0O4mJ9JtCs2Fe6AYs7n4E%2FfdQKLraF3ZTOgZKgW5smzZLlqaA6%2BjorwY%2BPNCwP%2FdPuwhR5epzGl5PPI8pktnnJZwu6Ej3eUy6rcHmnV872MMyOuMQGOqUBCwL1WeSbJ1xFIbP32URwgmDFXUg48p2tW9wuvjsb3nKBiz1LmozEj1aQ0XV5VIw8IhOvH0rHBxyprXqWutbaMZLlgGAAcAJ0KRCVF5IAoGcMFCDfREzeD%2F8AzR3%2FjpIPE7fOYZnmM06hUeJTnj0%2BzeCHeLHCvUyjOMw5fRELJlcQpXXgiv8dQNtTGOFyu90gWCnAE2dr8BApizzAsn%2B5KYvIVPaH&X-Amz-Signature=ce65b6f0dac68cf162624b0665391350540f789d23f1c801bf6cc4b01800225e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663J4ETDGX%2F20250802%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250802T140812Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA2WtAl4Nv%2F48J6NsUtl0RNODycqYOg%2B505FAZ8uNv18AiEAu%2BAhuRDhv9Ytg8qQYDMvtO%2BgW8T0vjdSt2BomylDdpAq%2FwMIFhAAGgw2Mzc0MjMxODM4MDUiDEw0D%2F0EfZZtSuqRUircAyn0JGYBkll10ylvylHr9Xm7RL1ptuFQuoCVlIVVgh5spGfgyGYfkl5GlXrtZqNecrnS4tO%2F88gz0KQCLR40wVypq7XGmwdn9HMoWxhFPdH2%2F66zQQsXctMCAtVc9I8OaqHeBdq7BBw3zSOIorAeSPbz0FytEjc3c4fFAFLnZEM7lX%2FIr7nd5JJ4GqY3lzOEv28EBZLYV%2Fy2aFtvdlaDhNBUKKK6QEP%2BsQTWQAYj838g9mylKIdWBit3o5YGHtB5sBJ26%2FCjYpzGExt55Zuqr1Tg2HFWwcH6qYYD7hUJetP84dm2hwXRSx%2FY%2BL9CFhlDADdANwNQR9jTkJ8AxO75AcZg0g%2FJkY9ihy4xWHNEpTckEJIxM5LhtRok%2BzGCLVvzhh726jnIzO8a7t5WYJWWschcVqUmY866OS01sXPlY9ghgQApOpn8%2BtoNCXOsewI%2FytN4oZJjZsE%2FXqTcAXHM6mZUYalThF7YqMisOqegRZVMH7Eza8rjYihhP6TkzUaczywaNYOwlWTfp4GaFU0O4mJ9JtCs2Fe6AYs7n4E%2FfdQKLraF3ZTOgZKgW5smzZLlqaA6%2BjorwY%2BPNCwP%2FdPuwhR5epzGl5PPI8pktnnJZwu6Ej3eUy6rcHmnV872MMyOuMQGOqUBCwL1WeSbJ1xFIbP32URwgmDFXUg48p2tW9wuvjsb3nKBiz1LmozEj1aQ0XV5VIw8IhOvH0rHBxyprXqWutbaMZLlgGAAcAJ0KRCVF5IAoGcMFCDfREzeD%2F8AzR3%2FjpIPE7fOYZnmM06hUeJTnj0%2BzeCHeLHCvUyjOMw5fRELJlcQpXXgiv8dQNtTGOFyu90gWCnAE2dr8BApizzAsn%2B5KYvIVPaH&X-Amz-Signature=53d1de75f2db5efac05be87053c76f8ad9f0913177b5fc47ef7a65750790bfd3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
