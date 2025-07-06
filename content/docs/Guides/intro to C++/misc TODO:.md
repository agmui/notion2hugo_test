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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZSN7GH%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGVjtDVdrYsHIYyVOIQrvZwp4AuH48IVGo6tbV5MgaRaAiEAkNoyXJslft048vQtwZ%2FHxS3DWF0XoOi8pgjI96Q8aowq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOX%2FqQ691pD4M%2FG74CrcAxmv2OTzAqhvqW0WpD2ntgNLKnWvxwp%2F95Gk7McJ%2F1NBcTPJdtWcnjNuEHqeI5cziPOo0Kg8RFeBXIIYyEELgoidyYaU5KDhJszDBunFy2msMEsVE2JMDig93jypxyNpj70jVoKMfNZmxh5gddomS2eB54fPHHAVkPbv3JTa5ji8mzM0orV7%2Bhis%2B7d6lNz0fexzKUMMYgcoRfrIqrD1K2a9Moj4GaaOpdQBbUMtrbEaE09w4TSHM72x39PR%2B3wDlvkKS6QfFY8%2BalLQXYfm5x3yJWs4rm7FI%2BiZP%2BTdFLK%2Bzup2m2etgcxfURw9QlW3Nhap%2Bf6e%2BnvSobJBgKEZ3YMbDFrW6VGIyujX99t9MH48VoojCGIKyFmXgwsy%2FWPZpq4AaKs4fCzJtmLakwCCNKhR7cSkRXfyuP%2BT6Gr79rgtKSZmnTyu1YxR1qJffuidW0rAEaLs6OQvT9ysrB%2F1fGQNe9M1jJAVw2Fshcj%2FznWC%2BCdrNIz6rFXfcm8zO5XiHmw3PkRRZGUtjt5zKa89YBvF%2F93Ni8XIqgCc4uNsErciV6l5rLp85Ae3lfcCGtTQT9CzSouFT9L2lDv8VK2vm7rvF09X5OJg8Kg8qkPSJ1JdTP2urZJ5Tta0k8G%2FMKCOp8MGOqUBqhmNCdtkKUB1VjjP4WSHJhqGqOMbBZfJ%2BoGVpnuPQfk0PT3qhnO144tTsFJQvMUM7CLlSSJ9kibuiKolojkEosghlVX3Qvw9se%2BQhsQunPJSErop%2BszNfDAOz4pcfVtmWxLXC0atKVhgiOko3OcgC3dYsUBiF6iOlrYScaSvppilvTMYnzxAsjnNfNxs8xUXNRZywHVL0S3l2L838Ih9KUAByWAb&X-Amz-Signature=6d3fc971fc2499fd8e80a9ac90d82104eb17440297219adf00c0d2fe23312f3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AZSN7GH%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T061216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIGVjtDVdrYsHIYyVOIQrvZwp4AuH48IVGo6tbV5MgaRaAiEAkNoyXJslft048vQtwZ%2FHxS3DWF0XoOi8pgjI96Q8aowq%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDOX%2FqQ691pD4M%2FG74CrcAxmv2OTzAqhvqW0WpD2ntgNLKnWvxwp%2F95Gk7McJ%2F1NBcTPJdtWcnjNuEHqeI5cziPOo0Kg8RFeBXIIYyEELgoidyYaU5KDhJszDBunFy2msMEsVE2JMDig93jypxyNpj70jVoKMfNZmxh5gddomS2eB54fPHHAVkPbv3JTa5ji8mzM0orV7%2Bhis%2B7d6lNz0fexzKUMMYgcoRfrIqrD1K2a9Moj4GaaOpdQBbUMtrbEaE09w4TSHM72x39PR%2B3wDlvkKS6QfFY8%2BalLQXYfm5x3yJWs4rm7FI%2BiZP%2BTdFLK%2Bzup2m2etgcxfURw9QlW3Nhap%2Bf6e%2BnvSobJBgKEZ3YMbDFrW6VGIyujX99t9MH48VoojCGIKyFmXgwsy%2FWPZpq4AaKs4fCzJtmLakwCCNKhR7cSkRXfyuP%2BT6Gr79rgtKSZmnTyu1YxR1qJffuidW0rAEaLs6OQvT9ysrB%2F1fGQNe9M1jJAVw2Fshcj%2FznWC%2BCdrNIz6rFXfcm8zO5XiHmw3PkRRZGUtjt5zKa89YBvF%2F93Ni8XIqgCc4uNsErciV6l5rLp85Ae3lfcCGtTQT9CzSouFT9L2lDv8VK2vm7rvF09X5OJg8Kg8qkPSJ1JdTP2urZJ5Tta0k8G%2FMKCOp8MGOqUBqhmNCdtkKUB1VjjP4WSHJhqGqOMbBZfJ%2BoGVpnuPQfk0PT3qhnO144tTsFJQvMUM7CLlSSJ9kibuiKolojkEosghlVX3Qvw9se%2BQhsQunPJSErop%2BszNfDAOz4pcfVtmWxLXC0atKVhgiOko3OcgC3dYsUBiF6iOlrYScaSvppilvTMYnzxAsjnNfNxs8xUXNRZywHVL0S3l2L838Ih9KUAByWAb&X-Amz-Signature=948e704efdd3255b690c1062b496b9eced3ac2fb00cc24e73f554a3fa6752c44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
