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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56LXKB6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCpXBTFmGQg1KL6GmVxt200qiaeu7TRGRb63qIKVn7cYgIgJ5TjuTr0vgi2Jh9ck8zWM76m%2BdBJ5tU5blsiFOOYn38qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECguv7g6ItlIQZiCCrcA9zcDLJYRpjp9RK7u%2BEXJxzC2JPWAxP%2BeDTk%2FGiVRRkTQtfPiETwjv%2BdRy56hduecNuSoyuvtrON9%2BJAuZGyUBFYTCU8MmJA%2FUZ09yqKeTDhDumFDI0LVxybOwTFriNd5VTQJwYTJanZxfRVM1CYsWqEckK62%2FeuQk5ApYxvaGFfJICbeGb7%2FncVefhM7xgXBWohBEzLqAvpdjTLZxym27MgL7RnBAYzVYQXGyx%2FpSLzKcy6RSrv6xmsMAxylKlT9DdqUpHPXmsNoVaczn6Uv%2FJuif7d6xGCL%2B20B7Tz9Q39irhGEukx4NSkqbPcvIhlQBYeAI56myAgKXW48%2B72Vi19hMZ5n9nEgKyMyTGIoIj61kZccJt%2FvRFoQR%2Bn%2Fll8b3kfm1K4nNqE%2B8HCftsqq4KGCFdnf%2B8pvjCJ6hkuRU0KBOGJX1hAsw6DNdsKjN4QQ7rMnYnwc5JfUAHJc1H6UWLhub6%2FzoPmaQyg4PW21DcTvclTH%2BDuq0CkiWIgVqLXsH5R5GEsFxfEu2qB8l4vwBB7PLAKDnxzJJTGhIWsqO%2BO2t95egTUU984pdAFxCyWZTfMj7NyPLILsgNqbNycJzkoaQkWHpAGCAFo074nuuWb%2F%2B0nkZVn%2FHFVVzqjMOz66b8GOqUBTr%2B1qCbwKFIZ040hPoPUeYV84Vp5exOzQt6ONh%2B1wZHcGfaYkxqDDJKIwtp53cVvzYWxMICXKdCObeXNfN7iVI9FgITpplSuBFEZ3H9xsusvCb4D3uMKwcGE%2B5R%2BoT%2FS2oRrNbwIFIQgPy%2FqZD7s%2Bcozgb6Us7ciP2Rzg3KZ37C3Kp0Fph3h6PRT5EivnKYt8RKqn0TuhuFEcClck1saNrWbEV7v&X-Amz-Signature=8880caf5ab81dea4ebe7c8e2765452795d6e7a7c18a0837ef8eb8fcf94087e36&X-Amz-SignedHeaders=host&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W56LXKB6%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJHMEUCIQCpXBTFmGQg1KL6GmVxt200qiaeu7TRGRb63qIKVn7cYgIgJ5TjuTr0vgi2Jh9ck8zWM76m%2BdBJ5tU5blsiFOOYn38qiAQI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDECguv7g6ItlIQZiCCrcA9zcDLJYRpjp9RK7u%2BEXJxzC2JPWAxP%2BeDTk%2FGiVRRkTQtfPiETwjv%2BdRy56hduecNuSoyuvtrON9%2BJAuZGyUBFYTCU8MmJA%2FUZ09yqKeTDhDumFDI0LVxybOwTFriNd5VTQJwYTJanZxfRVM1CYsWqEckK62%2FeuQk5ApYxvaGFfJICbeGb7%2FncVefhM7xgXBWohBEzLqAvpdjTLZxym27MgL7RnBAYzVYQXGyx%2FpSLzKcy6RSrv6xmsMAxylKlT9DdqUpHPXmsNoVaczn6Uv%2FJuif7d6xGCL%2B20B7Tz9Q39irhGEukx4NSkqbPcvIhlQBYeAI56myAgKXW48%2B72Vi19hMZ5n9nEgKyMyTGIoIj61kZccJt%2FvRFoQR%2Bn%2Fll8b3kfm1K4nNqE%2B8HCftsqq4KGCFdnf%2B8pvjCJ6hkuRU0KBOGJX1hAsw6DNdsKjN4QQ7rMnYnwc5JfUAHJc1H6UWLhub6%2FzoPmaQyg4PW21DcTvclTH%2BDuq0CkiWIgVqLXsH5R5GEsFxfEu2qB8l4vwBB7PLAKDnxzJJTGhIWsqO%2BO2t95egTUU984pdAFxCyWZTfMj7NyPLILsgNqbNycJzkoaQkWHpAGCAFo074nuuWb%2F%2B0nkZVn%2FHFVVzqjMOz66b8GOqUBTr%2B1qCbwKFIZ040hPoPUeYV84Vp5exOzQt6ONh%2B1wZHcGfaYkxqDDJKIwtp53cVvzYWxMICXKdCObeXNfN7iVI9FgITpplSuBFEZ3H9xsusvCb4D3uMKwcGE%2B5R%2BoT%2FS2oRrNbwIFIQgPy%2FqZD7s%2Bcozgb6Us7ciP2Rzg3KZ37C3Kp0Fph3h6PRT5EivnKYt8RKqn0TuhuFEcClck1saNrWbEV7v&X-Amz-Signature=a0df8fe41a8edf84eb8595b8c04f8f0ef2eade5c959762769a24e09870b6533a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
