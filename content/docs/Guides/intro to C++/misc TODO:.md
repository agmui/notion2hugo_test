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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/0d831920-88ea-4062-b3da-13b04e943655/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCX2A22X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDOXM0ImmAgzJVULmPcLQkDm7k9GKUo4LDr17oDZl6ptQIgXvfYrCknhWa1Tdjv3WVIc1fiVjvVcy7g1FilfzFxk9Mq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDA8ben2hFcLpf%2FBc6ircAy05IrsX9%2BVfDkXbJycaZA86HXKxaGs5aUeuUUmNd%2FkMXAlMEHRUSxjuCxUWxdqV%2Bi2DgBPkvr1wl1bMLl0pZH%2F2XFiPbHZuJKUtKLXnTBFe2McgZyFI8Oi6v0rw6iZPgzpTAh4dvSw7e1veR1Jt3s5LOrHiJbPZFjvtD8O75H0D0wGM7WCJI3y65Dk5NH8bAWqf%2FgCv85Zzn%2BJbtnar2yFtJC%2BTScgvKuMG43CdvnUItP%2F6icK0YHgXL2oBzgw515KfsGyPylLi1qA5W3WHtJsq%2FEL%2BFBX2R7AZVNHeJzTXqd%2B1Tmwk8Ekmh%2B2d%2B7bVZSsIO0fvCW1BFNRuMiX%2FV1TrCtkSzxrupNHK%2FOxaSfI66cJKo1qrcb08fetZ8%2FwTzwRa%2FHITs1YQswCnaYcTqF%2F5lGlgX0amnrLeykzvZkOiYAeUljV6CYbGV7Ag7r2cMu0VEAlPkKx19TH0wp7MtURl247whybJ%2FxhLETegosqOeja9CpRuuPBhPCxmsCGkBeYKnKBUM5egC%2FFtQl%2BkPLG%2Fc9c1ymSKkkB%2BQRuQ1GTFm82Mku7NV4MKe5mDJnGepnu924etjrYWA0iIM2WE7RQjcPO%2FlCTnYUBLTRMBvx1b%2BewqxXJfoWRAWEptMJf%2BvcIGOqUBNSC4on2JiQjNzHa4ADL%2BpLZF1IQBSdF9rEqLeQsoRDaB%2FczRlbON1hWc%2F%2FkMb71CxoWBk4RPsIcia9hFaGUwKT9mmGT3GFwZgMt37%2BC69uyoNmw3KZa1u3kgEvNhGLRtBMvZpmZgmn8iMuvdG1DfXsgzc%2FkQzPq3D5RxbHcdiJLg6shFBkem5HrobsuucnTs6hbPdOyJ6FdRcMbe4BkrdbFTDRsp&X-Amz-Signature=f5c556445b88c16970807f56b90e81f0b7f82417c42ed08f471ddff8045b40da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

Here you see we are in <u>Test</u> mode so ENV_UNIT_TESTS is turned on. So line 30 will be included

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/1ffbf634-044e-43ca-b80b-a05a3405a032/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCX2A22X%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T024353Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQDOXM0ImmAgzJVULmPcLQkDm7k9GKUo4LDr17oDZl6ptQIgXvfYrCknhWa1Tdjv3WVIc1fiVjvVcy7g1FilfzFxk9Mq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDA8ben2hFcLpf%2FBc6ircAy05IrsX9%2BVfDkXbJycaZA86HXKxaGs5aUeuUUmNd%2FkMXAlMEHRUSxjuCxUWxdqV%2Bi2DgBPkvr1wl1bMLl0pZH%2F2XFiPbHZuJKUtKLXnTBFe2McgZyFI8Oi6v0rw6iZPgzpTAh4dvSw7e1veR1Jt3s5LOrHiJbPZFjvtD8O75H0D0wGM7WCJI3y65Dk5NH8bAWqf%2FgCv85Zzn%2BJbtnar2yFtJC%2BTScgvKuMG43CdvnUItP%2F6icK0YHgXL2oBzgw515KfsGyPylLi1qA5W3WHtJsq%2FEL%2BFBX2R7AZVNHeJzTXqd%2B1Tmwk8Ekmh%2B2d%2B7bVZSsIO0fvCW1BFNRuMiX%2FV1TrCtkSzxrupNHK%2FOxaSfI66cJKo1qrcb08fetZ8%2FwTzwRa%2FHITs1YQswCnaYcTqF%2F5lGlgX0amnrLeykzvZkOiYAeUljV6CYbGV7Ag7r2cMu0VEAlPkKx19TH0wp7MtURl247whybJ%2FxhLETegosqOeja9CpRuuPBhPCxmsCGkBeYKnKBUM5egC%2FFtQl%2BkPLG%2Fc9c1ymSKkkB%2BQRuQ1GTFm82Mku7NV4MKe5mDJnGepnu924etjrYWA0iIM2WE7RQjcPO%2FlCTnYUBLTRMBvx1b%2BewqxXJfoWRAWEptMJf%2BvcIGOqUBNSC4on2JiQjNzHa4ADL%2BpLZF1IQBSdF9rEqLeQsoRDaB%2FczRlbON1hWc%2F%2FkMb71CxoWBk4RPsIcia9hFaGUwKT9mmGT3GFwZgMt37%2BC69uyoNmw3KZa1u3kgEvNhGLRtBMvZpmZgmn8iMuvdG1DfXsgzc%2FkQzPq3D5RxbHcdiJLg6shFBkem5HrobsuucnTs6hbPdOyJ6FdRcMbe4BkrdbFTDRsp&X-Amz-Signature=3326ff6bac8f936cbf42fcff395eef97c76706b698b6b3d6885c3fe3b6684e95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
